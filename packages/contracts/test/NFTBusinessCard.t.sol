// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "../src/NFTBusinessCard.sol";

contract NFTBusinessCardTest is Test {
    NFTBusinessCard public nft;
    address public owner = address(this);
    address public recipient = address(0x123);
    
    function setUp() public {
        nft = new NFTBusinessCard();
    }
    
    function testMintBusinessCard() public {
        uint256 tokenId = nft.mintBusinessCard(
            recipient,
            "Roy",
            "Web3 Developer",
            "Eripmav",
            "roy@eripmav.com",
            "ipfs://metadata"
        );
        
        assertEq(nft.ownerOf(tokenId), recipient);
        
        NFTBusinessCard.BusinessCard memory card = nft.getBusinessCard(tokenId);
        assertEq(card.name, "Roy");
        assertEq(card.position, "Web3 Developer");
    }
}
