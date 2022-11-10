pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract CookiePortal {
     uint256 totalCookies;

    constructor() {
        console.log("Hello I am a cookie!");
    }
    
    function cookie() public {
        totalCookies += 1;
        console.log("%s cookie count:",msg.sender);
    }

    function getTotalCookies() public view returns (uint256){
        console.log("We reached %d cookies Thank you!", totalCookies);
    }
}