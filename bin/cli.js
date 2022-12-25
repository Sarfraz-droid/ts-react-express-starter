#!/usr/bin/env node
import { execSync } from "child_process";
import chalk from "chalk";
import fs from "fs";

const log = console.log;
const repoName = process.argv[2];

const runMultipleCommands = (commands) => {
    try {
        commands.forEach((command) => {
            execSync(command, { stdio: "inherit" });
        })
        return true;
    } catch (error) {
        console.log("Something went wrong: ", error);
        return false;
    }
};

const updatePackageJson = () => {
    try {
        const packageJson = JSON.parse(fs.readFileSync(`./${repoName}/package.json`, "utf8"));
        packageJson.name = repoName;
        packageJson.description = `A new project created using ts-react-express-starter`;
        packageJson.bin = undefined;
        packageJson.dependencies = {
            ...packageJson.dependencies,
            chalk: undefined
        };
        fs.writeFileSync(`./${repoName}/package.json`, JSON.stringify(packageJson, null, 2));
        return true;
    } catch (error) {
        console.log("Something went wrong: ", error);
        return false;
    }
}

const gitCheckoutCommand = `git clone --depth=1 https://github.com/Sarfraz-droid/ts-react-express-starter ${repoName}`;

log(chalk.red(`Creating new branch ${repoName}...`));
const checkedOut = runMultipleCommands([
    gitCheckoutCommand,
    `cd ${repoName} && rm -rf .git`,
    `cd ${repoName} && git init`,
    `cd ${repoName} && rm -rf bin`,
]);
updatePackageJson();

if (!checkedOut) {
    log(chalk.red(`Something went wrong!`));
} else {
    log(chalk.bold.blueBright(`🤩\tCongratulations! Your Started App is ready!`));
    log(
        chalk.italic.greenBright(
            `🪐\tTo install dependencies your app, run the following commands:`
        )
    );
    log(chalk.bold(`\t\t- cd ${repoName}`));
    log(chalk.bold(`\t\t- yarn fresh-install`));
    log(chalk.bold(`\t\t- 🪐 To start your app, run the following commands:`));
    log(chalk.bold(`\t\t- cd ${repoName}`));
    log(chalk.bold(`\t\t- yarn dev`));
}
