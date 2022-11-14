pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract CookiePortal {
     uint256 totalCookies;

event NewCookie(address indexed from, uint256 timestamp, string message);
  struct Cookie {
        address cookiegiver; // The address of the user who waved.
        string message; // The message the user sent.
        uint256 timestamp; // The timestamp when the user waved.
    }
    Cookie[] cookies;

    constructor() {
        console.log("Hello I am a cookie!");
    }
   
  function cookie(string memory _message) public {
        totalCookies += 1;
        console.log("%s cookie count:",msg.sender);
        //store data in the array of cookies defined below
        cookies.push(Cookie(msg.sender, _message, block.timestamp));
        emit NewCookie(msg.sender, block.timestamp,_message);
            uint256 prizeAmount = 0.0001 ether;
    require(
        prizeAmount <= address(this).balance,
        "Trying to withdraw more money than the contract has."
    );
    (bool success, ) = (msg.sender).call{value: prizeAmount}("");
    require(success, "Failed to withdraw money from contract.");

    }

 function getAllCookies() public view returns (Cookie[] memory) {
        return cookies;
    }
    function getTotalCookies() public view returns (uint256){
        console.log("We reached %d cookies Thank you!", totalCookies);
    }
}