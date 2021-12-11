PS C:\Users\msd\udacity\Blockchain-Capstone\eth-contracts> truffle migrate --network rinkeby --reset

Compiling your contracts...
===========================
> Compiling .\contracts\ERC721Mintable.sol
> Compiling .\contracts\Migrations.sol
> Compiling .\contracts\Oraclize.sol
> Compiling .\contracts\SolnSquareVerifier.sol
> Compiling .\contracts\verifier.sol
> Compiling openzeppelin-solidity\contracts\drafts\Counters.sol
> Compiling openzeppelin-solidity\contracts\math\SafeMath.sol
> Compiling openzeppelin-solidity\contracts\token\ERC721\IERC721Receiver.sol
> Compiling openzeppelin-solidity\contracts\utils\Address.sol
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
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        9795927
   > block timestamp:     1639223342
   > account:             0x8c4cc332b0161d8D99f1Cf5fe9f0Eed3Fd4A1Dd9
   > balance:             0.666551332740403826
   > gas used:            210237 (0x3353d)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00210237 ETH

   -------------------------------------
   > Total cost:          0.00210237 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > block number:        9795929
   > block timestamp:     1639223350
   > account:             0x8c4cc332b0161d8D99f1Cf5fe9f0Eed3Fd4A1Dd9
   > balance:             0.656601512740403826
   > gas used:            967619 (0xec3c3)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00967619 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > block number:        9795930
   > block timestamp:     1639223374
   > account:             0x8c4cc332b0161d8D99f1Cf5fe9f0Eed3Fd4A1Dd9
   > balance:             0.616410072740403826
   > gas used:            4019144 (0x3d53c8)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.04019144 ETH

   -------------------------------------
   > Total cost:          0.04986763 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.05197 ETH





Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 29999972 (0x1c9c364)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xb572f9e05e5ee0542dadb925a2eafe79e4051f506d38cad6e693dd6192c6399c
   > Blocks: 1            Seconds: 12
   > contract address:    0xb59c390D1D38e0B8F10A7e75b9BCeCf5c00Bb219
   > block number:        9795930
   > block timestamp:     1639223404
   > account:             0x8c4cc332b0161d8D99f1Cf5fe9f0Eed3Fd4A1Dd9
   > balance:             0.666388332740403826
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

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0xa140eb81ef4c05f2d2de2fece074cacb372dd4015ce6778f21790b33958bfeec
   > Blocks: 1            Seconds: 12
   > contract address:    0xF163D50aB46841FF98BB9543c1606E8569fAab5F
   > block number:        9795932
   > block timestamp:     1639223434
   > account:             0x8c4cc332b0161d8D99f1Cf5fe9f0Eed3Fd4A1Dd9
   > balance:             0.656254512740403826
   > gas used:            967619 (0xec3c3)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00967619 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x800afb01bf0c9a1c62095c706d06ec35c442f419e2be02d265b330955289b896
   > Blocks: 0            Seconds: 8
   > contract address:    0x4fA130F51c8B070fFAc599DB82997730dFf29d3E
   > block number:        9795933
   > block timestamp:     1639223449
   > account:             0x8c4cc332b0161d8D99f1Cf5fe9f0Eed3Fd4A1Dd9
   > balance:             0.614180072740403826
   > gas used:            4207444 (0x403354)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.04207444 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.05175063 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.054016 ETH