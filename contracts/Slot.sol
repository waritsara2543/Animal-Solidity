//SPDX-Lisence-Identifier: MIT
pragma solidity ^0.8.9;
import "./Animal.sol";

contract Slot is Animal {
    function walk(uint256 _step) public {
        uint256 calories = _step * 20;
        super.burnCalories(calories);
    }

    function climb(uint256 _height) public {
        uint256 calories = _height * 50;
        super.burnCalories(calories);
    }
}
