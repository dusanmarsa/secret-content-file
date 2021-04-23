const fs = require('fs');
const { resolve } = require('path');

const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    const fileContent = core.getInput('CONTENT');
    const fileName = core.getInput('FILE_NAME');

    fs.writeFileSync(resolve(__dirname, `./${fileName}`), fileContent);
}

run();