const fs = require('fs');
const path = require('path');
const core = require('@actions/core');

async function run() {
    try {
        const fileContent = core.getInput('CONTENT');
        const fileName = core.getInput('FILE_NAME');
        const filePath = core.getInput('DIRECTORY')
        const fileAbsolutePath = path.join(process.cwd(), filePath)

        try {
            await fs.access(fileAbsolutePath)
        } catch (error) {
            await fs.mkdir(fileAbsolutePath, { recursive: true })
        }

        try {
            await fs.access(fileAbsolutePath)
        } catch (error) {
            core.setFailed("couldn't create directory structure");
        }

        await fs.writeFile(path.join(fileAbsolutePath, fileName), fileContent)
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();