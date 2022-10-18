//SPDX-Lisence-Identifier: MIT
pragma solidity ^0.8.9;

contract Animal {
    uint256 public calories;
    string name;
    enum Food {
        grass,
        meat
    }

    function eat(Food _food) public {
        if (_food == Food.grass) {
            calories += 500;
        } else if (_food == Food.meat) {
            calories += 1000;
        }
    }

    function drink() public {
        calories += 200;
    }

    function burnCalories(uint256 _calories) internal {
        calories -= _calories;
    }

    function getCalories() public view returns (uint256) {
        return calories;
    }
}
