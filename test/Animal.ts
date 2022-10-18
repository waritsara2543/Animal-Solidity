import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Events", function () {
  it("Test success", async function () {
    const Slot = await ethers.getContractFactory("Slot");
    const mySlot = await Slot.deploy();
    await mySlot.deployed();

    await mySlot.eat(0);
    console.log("Slot >> calories after eat", await mySlot.getCalories());
    await mySlot.drink();
    console.log("Slot >> calories after drink", await mySlot.getCalories());
    await mySlot.walk(2);
    console.log("Slot >> calories after walk", await mySlot.getCalories());
    await mySlot.climb(2);
    console.log("Slot >> calories after climb", await mySlot.getCalories());

    const Tiger = await ethers.getContractFactory("Tiger");
    const myTiger = await Tiger.deploy();
    await myTiger.deployed();

    await myTiger.eat(1);
    console.log("Tiger >> calories after eat", await myTiger.getCalories());
    await myTiger.drink();
    console.log("Tiger >> calories after drink", await myTiger.getCalories());
    await myTiger.run(2);
    console.log("Tiger >> calories after run", await myTiger.getCalories());
    await myTiger.hunt(1);
    console.log("Tiger >> calories after hunt", await myTiger.getCalories());
  });
});
