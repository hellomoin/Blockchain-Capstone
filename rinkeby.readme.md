PS C:\Users\msd\udacity\Blockchain-Capstone\eth-contracts> truffle migrate --network rinkeby --reset

Compiling your contracts...
===========================
> Compiling .\contracts\ERC721Mintable.sol
> Compiling .\contracts\Migrations.sol
> Compiling .\contracts\Oraclize.sol
> Compiling .\contracts\SolnSquareVerifier.sol
> Compiling .\contracts\SolnSquareVerifier.sol
> Compiling .\contracts\verifier.sol
> Compilation warnings encountered:

    project:/contracts/Oraclize.sol:320:7: Warning: Unreachable code.
      _networkID; // silence the warning and remain backwards compatible
      ^--------^
,project:/contracts/Oraclize.sol:373:7: Warning: Unreachable code.
      _myid; _result; _proof; // Silence compiler warnings
      ^--------------------^
,project:/contracts/Oraclize.sol:371:5: Warning: Function state mutability can be restricted to pure
    function __callback(bytes32 _myid, string memory _result, bytes memory _proof) public {
    ^ (Relevant source part starts here and spans across multiple lines).

> Artifacts written to C:\Users\msd\udacity\Blockchain-Capstone\eth-contracts\build\contracts
> Compiled successfully using:
   - solc: 0.5.16+commit.9c3226ce.Emscripten.clang



Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 29970648 (0x1c950d8)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        9783775
   > block timestamp:     1639040667
   > account:             0x8c4cc332b0161d8D99f1Cf5fe9f0Eed3Fd4A1Dd9
   > balance:             0.923796314998500582
   > gas used:            210237 (0x3353d)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00210237 ETH

   -------------------------------------
   > Total cost:          0.00210237 ETH


2_deploy_contracts.js
=====================

   Deploying 'Address'
   -------------------
   > block number:        9783777
   > block timestamp:     1639040674
   > account:             0x8c4cc332b0161d8D99f1Cf5fe9f0Eed3Fd4A1Dd9
   > balance:             0.922401864998500582
   > gas used:            112082 (0x1b5d2)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00112082 ETH


   Deploying 'Verifier'
   --------------------
   > block number:        9783778
   > block timestamp:     1639040677
   > account:             0x8c4cc332b0161d8D99f1Cf5fe9f0Eed3Fd4A1Dd9
   > balance:             0.912725674998500582
   > gas used:            967619 (0xec3c3)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00967619 ETH


   Linking
   -------
   * Contract: SolnSquareVerifier <--> Library: Address

   Deploying 'SolnSquareVerifier'
   ------------------------------
   > block number:        9783779
   > block timestamp:     1639040701
   > account:             0x8c4cc332b0161d8D99f1Cf5fe9f0Eed3Fd4A1Dd9
   > balance:             0.870561914998500582
   > gas used:            4216376 (0x405638)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.04216376 ETH


   Linking
   -------
   * Contract: MSDRealEstateERC721Token <--> Library: Address

   Deploying 'MSDRealEstateERC721Token'
   ------------------------------------
   > block number:        9783780
   > block timestamp:     1639040732
   > account:             0x8c4cc332b0161d8D99f1Cf5fe9f0Eed3Fd4A1Dd9
   > balance:             0.842828434998500582
   > gas used:            2773348 (0x2a5164)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.02773348 ETH

   -------------------------------------
   > Total cost:          0.08069425 ETH


Summary
=======
> Total deployments:   5
> Final cost:          0.08279662 ETH





Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 29999972 (0x1c9c364)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xecff8f8f6795857c43ff6b0277693c085f7d92d37a1e1edf8d847da9307f0be3
   > Blocks: 1            Seconds: 12
   > contract address:    0x9fD941e859aFe9CE9d7AD268FAC992FBe88bA1FF
   > block number:        9783780
   > block timestamp:     1639040758
   > account:             0x8c4cc332b0161d8D99f1Cf5fe9f0Eed3Fd4A1Dd9
   > balance:             0.923633314998500582
   > gas used:            226537 (0x374e9)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00226537 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00226537 ETH


2_deploy_contracts.js
=====================

   Deploying 'Address'
   -------------------
   > transaction hash:    0xc1de61e27b1142327be2a3cbd36ecfcc20728693ae995c934c1215487501420d
   > Blocks: 0            Seconds: 8
   > contract address:    0xF4Ce00F1Efc5F9CEE66a12D400e715dDBc345877
   > block number:        9783782
   > block timestamp:     1639040788
   > account:             0x8c4cc332b0161d8D99f1Cf5fe9f0Eed3Fd4A1Dd9
   > balance:             0.922054864998500582
   > gas used:            112082 (0x1b5d2)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00112082 ETH


   Deploying 'Verifier'
   --------------------
   > transaction hash:    0xe81fa46293609f5d221f45e2169f083dcdee3c63b85e58603bb4c17b732bc104
   > Blocks: 1            Seconds: 12
   > contract address:    0x067203B6824f2575746E4a2aED476ad1f3c888D3
   > block number:        9783783
   > block timestamp:     1639040803
   > account:             0x8c4cc332b0161d8D99f1Cf5fe9f0Eed3Fd4A1Dd9
   > balance:             0.912378674998500582
   > gas used:            967619 (0xec3c3)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00967619 ETH


   Linking
   -------
   * Contract: SolnSquareVerifier <--> Library: Address (at address: 0xF4Ce00F1Efc5F9CEE66a12D400e715dDBc345877)

   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xd650edae9b1a450be1934689707f3ea41b56925283b3b383ce1e3d308612f171
   > Blocks: 1            Seconds: 12
   > contract address:    0x61fE992C7784116a6364a61FF96d58719dd1e5Fc
   > block number:        9783784
   > block timestamp:     1639040818
   > account:             0x8c4cc332b0161d8D99f1Cf5fe9f0Eed3Fd4A1Dd9
   > balance:             0.868331914998500582
   > gas used:            4404676 (0x4335c4)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.04404676 ETH


   Linking
   -------
   * Contract: MSDRealEstateERC721Token <--> Library: Address (at address: 0xF4Ce00F1Efc5F9CEE66a12D400e715dDBc345877)

   Deploying 'MSDRealEstateERC721Token'
   ------------------------------------
   > transaction hash:    0x3279f4373503859d7826210be7b7803a8c5d747f1f6057d25a7c6daa37782aa9
   > Blocks: 0            Seconds: 8
   > contract address:    0xE004716606f3dA2e67ca0bB9D925eEd52b629Ff8
   > block number:        9783785
   > block timestamp:     1639040833
   > account:             0x8c4cc332b0161d8D99f1Cf5fe9f0Eed3Fd4A1Dd9
   > balance:             0.838837434998500582
   > gas used:            2949448 (0x2d0148)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.02949448 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.08433825 ETH


Summary
=======
> Total deployments:   5
> Final cost:          0.08660362 ETH