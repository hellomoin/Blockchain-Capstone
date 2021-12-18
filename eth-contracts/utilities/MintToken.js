#!/usr/bin/env node
'use strict';

const Web3 = require('web3');
const fs = require('fs');

const HDWalletProvider = require('truffle-hdwallet-provider');
const contractFile = require('../build/contracts/SolnSquareVerifier');

// For each token Proof, use numbers from 0..9 for each proof
// const squareProof = require("../../zokrates/code/square/proofs/1/proof.json");
const tokenId = 1;  // Change number for each token

const infuraKey = "xxxxxxxxxxxxxxxx"; // Use infuraKey

const mnemonic = fs.readFileSync("../.secret").toString().trim();

(async() => {

  const provider = await new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`, 0);
  
  const web3 = await new Web3(provider);
  
  const accounts = await web3.eth.getAccounts();
  const contract = await new web3.eth.Contract(contractFile.abi, contractAddress, { gasLimit: "4500000" });

  console.log(`Minting:\n tokenId: ${tokenId}\n address ${accounts[0]}`);

  try {
    let result = await contract.methods.mint(accounts[0], tokenId).send({ from: accounts[0], gas: 2500000});
    console.log("Successfully mint a token");
    console.log(result);
  } catch(error) {
    console.log("Failed to mint a token");
    console.log(error);  
    throw error;
  }

  process.exit(1);

})();