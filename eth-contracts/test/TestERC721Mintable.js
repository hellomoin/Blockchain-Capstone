var MSDRealEstateERC721Token = artifacts.require('MSDRealEstateERC721Token');

contract('MSD Real Estate Token tests', accounts => {

    let contract;
    const account1 = accounts[0];
    const account2 = accounts[1];

    describe('Test ERC721 spec', function () {
        beforeEach(async function () { 
            contract = await MSDRealEstateERC721Token.new({from: account1});

            await contract.mint(account1, 1, { from: account1 });
            await contract.mint(account1, 2, { from: account1 });
            await contract.mint(account2, 3, { from: account1 });
            await contract.mint(account2, 4, { from: account1 });
        })

        it('should return total supply', async function () { 
            let totalSupply = await contract.totalSupply.call();
            assert.equal(4, totalSupply, "The supply should be four.");
        })

        it('should get token balance', async function () { 
            let balanceOne = await contract.balanceOf.call(account1);
            assert.equal(2, balanceOne, "account1 should have two tokens.");

            let balanceTwo = await contract.balanceOf.call(account2);
            assert.equal(2, balanceTwo, "account2 should have two token.");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token URI', async function () { 
            let token = null;

            token = await contract.tokenURI.call(1);
            assert.equal("https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", token, "URI of given token 1 is incorrect.");
            
            token = await contract.tokenURI.call(2);
            assert.equal("https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/2", token, "URI of given token 2 is incorrect.");

            token = await contract.tokenURI.call(3);
            assert.equal("https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/3", token, "URI of given token 3 is incorrect.");

            token = await contract.tokenURI.call(4);
            assert.equal("https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/4", token, "URI of given token 4 is incorrect.");
        })

        it('should transfer token from one owner to other ohter', async function () { 
            try {
                await contract.transferFrom(account1, account2, 2, {from: account1});
            } catch(e) {
                console.log('error calling TransferFrom: ', e);
            }

            let newOwer = await contract.ownerOf.call(1);
            assert.equal(account1, newOwer, "Owner of token with ID = 1 is not correct.");

            newOwer = await contract.ownerOf.call(2);
            assert.equal(account2, newOwer, "Owner of token with ID = 2 is not correct.");
        })
    });

    describe('should have ownership properties', function () {
        beforeEach(async function () { 
            contract = await MSDRealEstateERC721Token.new({from: account1});
        })

        it('should fail when minting when address is not contract owner', async function () {             
            let hasAccess = true;

            try  {
                await contract.mint(account1, 5, {from: account2});
            } catch(e) {
                hasAccess = false;
            }

            assert.equal(false, hasAccess, "Mint action not authorized for account2.");
            
            let balance = await contract.balanceOf.call(account2);
            assert.equal(0, balance, "Balance should be 0 for account2.");
        })

        it('should return contract owner', async function () { 
            let owner = await contract.getOwner.call();
            assert.equal(account1, owner, "The contract owner should be account1.");
        })
    });
})