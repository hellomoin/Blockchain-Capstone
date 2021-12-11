//const Address = artifacts.require("Address");
var SquareVerifier = artifacts.require("./Verifier");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier");
//var MSDRealEstateERC721Token = artifacts.require("./MSDRealEstateERC721Token");

module.exports = function(deployer) {
//  deployer.deploy(Address);
//  deployer.deploy(SquareVerifier).then(function() {
//    deployer.link(Address, SolnSquareVerifier);
//    deployer.deploy(SolnSquareVerifier, SquareVerifier.address);
//  });
  
  deployer.deploy(SquareVerifier);
  deployer.deploy(SolnSquareVerifier);
//  deployer.link(Address, MSDRealEstateERC721Token);
//  deployer.deploy(MSDRealEstateERC721Token);
};