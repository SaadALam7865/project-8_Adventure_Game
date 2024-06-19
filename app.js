#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel; //75 fuel remaining
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel; //75 fuel remaining
    }
}
console.log(chalk.magentaBright.bold.italic("\t <<<<<<<<<<<<<<<<<<<=======================>>>>>>>>>>>>>>>>>>"));
console.log(chalk.yellowBright.bold.italic("======<<<< Welcome To 'Code_With_Saad' ***ADVENTURE GAME*** >>>>>======"));
console.log(chalk.green.bold.italic("\t <<<<<<<<<<<<<<<<<<<=======================>>>>>>>>>>>>>>>>>>"));
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.greenBright.bold.italic("Please Enter your Name")
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "Select",
        type: "list",
        message: "Select Your Opponent",
        choices: ["Skeleton", "Alien", "Zombie"]
    }
]);
let p1 = new Player(player.name); // player1 
let o1 = new Opponent(opponent.Select); // opponent1
//------ Using do while loop--------
do {
    // ---- FOR SKELETON---
    if (opponent.Select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.yellowBright.italic("What would you like to do?"),
                choices: ["Attack", "Drink portion", "Run for your life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name}  fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.redBright.bold.italic("You Loose ,Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bgGreenBright.bold.italic("You winn!!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.greenBright.bold.italic(`You drink Health Portion Your fuel is ${p1.fuel} `));
        }
        if (ask.opt == "Run for your life..") {
            console.log(chalk.bold.italic("You Loose ,Better Luck Next Time"));
            process.exit();
        }
    }
    //-----For Alien-----
    if (opponent.Select == "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink portion", "Run for your life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name}  fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.redBright("You Loose ,Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bgGreenBright.bold.italic("You winn!!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.greenBright.bold.italic(`You drink Health Portion Your fuel is ${p1.fuel} `));
        }
        if (ask.opt == "Run for your life..") {
            console.log(chalk.redBright("You Loose ,Better Luck Next Time"));
            process.exit();
        }
    }
    //--- <<ZOmbie>>> ----
    if (opponent.Select == "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink portion", "Run for your life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name}  fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.redBright.italic("You Loose ,Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bgGreenBright.bold.italic("You winn!!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.greenBright.bold.italic(`You drink Health Portion Your fuel is ${p1.fuel} `));
        }
        if (ask.opt == "Run for your life..") {
            console.log(chalk.redBright.bold.italic("You Loose ,Better Luck Next Time"));
            process.exit();
        }
    }
} while (true);
