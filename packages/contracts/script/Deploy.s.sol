// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import "../src/ProfessionalCV.sol";
import "../src/NFTBusinessCard.sol";

contract DeployScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        
        ProfessionalCV cv = new ProfessionalCV();
        NFTBusinessCard nft = new NFTBusinessCard();
        
        console.log("ProfessionalCV deployed to:", address(cv));
        console.log("NFTBusinessCard deployed to:", address(nft));
        
        vm.stopBroadcast();
    }
}
