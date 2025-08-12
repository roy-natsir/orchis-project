// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "../src/ProfessionalCV.sol";

contract ProfessionalCVTest is Test {
    ProfessionalCV public cv;
    address public user = address(0x123);
    
    function setUp() public {
        cv = new ProfessionalCV();
    }
    
    function testUpdateCV() public {
        vm.startPrank(user);
        
        string[] memory skills = new string[](2);
        skills[0] = "Solidity";
        skills[1] = "React";
        
        string[] memory experiences = new string[](1);
        experiences[0] = "Web3 Developer at Company";
        
        cv.updateCV(
            "Roy",
            "Full Stack Web3 Developer",
            "Passionate Web3 developer",
            skills,
            experiences
        );
        
        ProfessionalCV.CVData memory cvData = cv.getCV(user);
        assertEq(cvData.name, "Roy");
        assertEq(cvData.owner, user);
        
        vm.stopPrank();
    }
}
