#!/usr/bin/env node
import { execSync } from 'child_process';
import chalk from 'chalk';
const log = console.log;

const runCommand = (command) => {
    try {
        execSync(command, { stdio: 'inherit' });
        return true;
    } catch (error) {
        console.log('Something went wrong: ', error);
        return false;
    }
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth=1 https://github.com/Sarfraz-droid/ts-react-express-starter ${repoName}`;

log(chalk.red(`Creating new branch ${repoName}...`));
const checkedOut = runCommand(gitCheckoutCommand);
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
