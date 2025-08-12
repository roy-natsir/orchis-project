// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ProfessionalCV {
    struct CVData {
        string name;
        string title;
        string description;
        string[] skills;
        string[] experiences;
        address owner;
        uint256 timestamp;
    }
    
    mapping(address => CVData) public cvs;
    
    event CVUpdated(address indexed owner, uint256 timestamp);
    
    function updateCV(
        string memory _name,
        string memory _title,
        string memory _description,
        string[] memory _skills,
        string[] memory _experiences
    ) external {
        cvs[msg.sender] = CVData({
            name: _name,
            title: _title,
            description: _description,
            skills: _skills,
            experiences: _experiences,
            owner: msg.sender,
            timestamp: block.timestamp
        });
        
        emit CVUpdated(msg.sender, block.timestamp);
    }
    
    function getCV(address _owner) external view returns (CVData memory) {
        return cvs[_owner];
    }
}
