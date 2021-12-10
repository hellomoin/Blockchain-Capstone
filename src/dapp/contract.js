//import FlightSuretyApp from '../../build/contracts/FlightSuretyApp.json';
//import FlightSuretyData from '../../build/contracts/FlightSuretyData.json';
import SolnSquareVerifierArtifact from '../../eth-contracts/build/contracts/SolnSquareVerifier.json'

import Config from './config.json';
import Web3 from 'web3';
import { default as contract } from 'truffle-contract';

let proofInput = 2;
let proof = {
    "proof": {
        "a": ["0x0c28510360a96a46b5513da76bb689023b2b30b21bca1eb4c5848f163190422f", "0x030d061e57547158a928938628f9541e2f0ee1894ca4e6575ef76fb810fbe188"],
        "b": [["0x1293e47aa0cf701755acd61567b335bfd3bb6df624c393676913c7b24ff0e959", "0x14c24330e91f487f40e5a06429857ca98459be66d40a72b646b8c5ebcb2dff99"], ["0x03d2b0055e0ffb83cebddcebefe3e4431b3fb24510c5e40adb394d52a6104257", "0x183c9970fdb6278b3f6874543d599bc2579540880fb3f7ad6497738c726448a6"]],
        "c": ["0x23535e05e23383317b936ea430f0c825166c3f5515f41e4a213f6cecd4efb1d6", "0x0132eea2326c4acff8588484a9fc20ac42cc291567fa29b2a48d9996758b2b1b"]
    },
    "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000031", "0x0000000000000000000000000000000000000000000000000000000000000001"]
    };

export default class Contract {
    constructor(network, callback) {
        this.owner = null;
        let config = Config[network];
        console.log(config);

        this.web3 = new Web3(new Web3.providers.HttpProvider(config.url));

        this.initialize(callback);
    }

    async initialize(callback) {
        if (window.ethereum) {
            try {
                this.web3 = new Web3(window.ethereum);
                // Request account access
                await window.ethereum.enable();
            } catch (error) {
                // User denied account access...
                console.error("User denied account access")
            }
        }

        if (typeof this.web3 == "undefined") {
            this.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
            console.log("local ganache provider");
        }

        this.SolnSquareVerifier = contract(SolnSquareVerifierArtifact);

        this.SolnSquareVerifier.setProvider(this.web3.currentProvider)

        this.web3.eth.getAccounts((error, accounts) => {
            this.owner = accounts[0];
            this.accounts = accounts;            
            });

        callback();
    }

    async register(propertyId, callback) {        
        let self = this;
        const { proof: { a, b, c }, inputs: inputs } = proof;

        if(self.instance == undefined) {
            self.instance = await self.SolnSquareVerifier.deployed();
        }

        console.log('Instance: ' + self.instance);

        let instanceOwner = await self.instance.getOwner.call();

        console.log('Contract owner: ' + instanceOwner);

        await self.instance.add(a, b, c, [proofInput * proofInput, proofInput], {from: self.owner});

     //   let solution = await self.instance.solutions.call(0);
       // console.log("solution:" + solution);

        console.log(`New Property #${propertyId} Owner is: ${self.owner}`);
        await self.instance.verifyAndMint(a, b, c, [proofInput * proofInput, proofInput], propertyId, { from: self.owner, gas: 4500000});
        
        proofInput++;

        callback();
    }

    async fetchToken(propertyId, callback) {        
        let self = this;

        if(self.instance == undefined) {
            self.instance = await self.SolnSquareVerifier.deployed();
        }

        let tokenUrl = await self.instance.tokenURI.call(propertyId, {from: self.owner, gas: 4500000});

        console.log(`Token Url #${tokenUrl} Owner is: ${self.owner}`);

        callback();
    }
}