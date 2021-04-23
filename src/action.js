const fs = require('fs');
const path = require('path');
const core = require('@actions/core');

const fsPromises = fs.promises

async function run() {
    try {
        const fileContent = core.getInput('CONTENT');
        const fileName = core.getInput('FILE_NAME');
        const filePath = core.getInput('DIRECTORY')
        const fileAbsolutePath = path.join(process.cwd(), filePath)

        try {
            await fsPromises.access(fileAbsolutePath)
        } catch (error) {
            await fsPromises.mkdir(fileAbsolutePath, { recursive: true })
        }

        try {
            await fsPromises.access(fileAbsolutePath)
        } catch (error) {
            core.setFailed("couldn't create directory structure");
        }

        await fsPromises.writeFile(path.join(fileAbsolutePath, fileName), fileContent)
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();