#!/usr/bin/env node
const { execSync } = require('child_process');

const runCommand = (command) => {
    try {
        execSync(command, { stdio: 'inherit' });

    } catch (error) {
        console.log('Something went wrong: ', error);
        return false;
    } finally {
        return true;
    }
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth=1 https://github.com/Sarfraz-droid/ts-react-express-starter ${repoName}`;

console.log(`Creating new branch ${repoName}...`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(1);

console.log(`🤩 Congratulations! Your Started App is ready!`);
console.log(`🪐To install dependencies your app, run the following commands:`);
console.log(`cd ${repoName}`);
console.log(`yarn fresh-install`);
console.log(`🪐To start your app, run the following commands:`);
console.log(`cd ${repoName}`);
console.log(`yarn dev`);