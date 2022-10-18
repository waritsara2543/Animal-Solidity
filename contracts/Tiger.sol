//SPDX-Lisence-Identifier: MIT
pragma solidity ^0.8.9;
import "./Animal.sol";

contract Tiger is Animal {
    function run(uint256 _km) public {
        uint256 calories = _km * 200;
        super.burnCalories(calories);
    }

    function hunt(uint256 _numofAnimal) public {
        uint256 calories = _numofAnimal * 500;
        super.burnCalories(calories);
    }
}
