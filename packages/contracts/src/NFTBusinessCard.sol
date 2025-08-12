// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTBusinessCard is ERC721, Ownable {
    uint256 private _tokenIdCounter;
    
    struct BusinessCard {
        string name;
        string position;
        string company;
        string contact;
        string metadata;
    }
    
    mapping(uint256 => BusinessCard) public businessCards;
    
    constructor() ERC721("Professional Business Card", "PBC") {}
    
    function mintBusinessCard(
        address to,
        string memory _name,
        string memory _position,
        string memory _company,
        string memory _contact,
        string memory _metadata
    ) external onlyOwner returns (uint256) {
        uint256 tokenId = _tokenIdCounter++;
        _mint(to, tokenId);
        
        businessCards[tokenId] = BusinessCard({
            name: _name,
            position: _position,
            company: _company,
            contact: _contact,
            metadata: _metadata
        });
        
        return tokenId;
    }
    
    function getBusinessCard(uint256 tokenId) external view returns (BusinessCard memory) {
        return businessCards[tokenId];
    }
}
