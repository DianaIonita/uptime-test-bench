import fs from 'fs';
const Diff = require('diff');

async function diffDrafts() {
    const publishedDrafts = JSON.parse(fs.readFileSync('./src/scripts/published-drafts.json', { encoding: 'utf-8' }));
    const unpublishedChanges = JSON.parse(fs.readFileSync('./src/scripts/unpublished-changes.json', { encoding: 'utf-8' }));

    const outputFilePath = './diff-output.html';
    fs.writeFileSync(outputFilePath, '<html>');
    for (const published of publishedDrafts) {
        const unpublished = unpublishedChanges.find((d: any) => d.payload.hackId == published.payload.hackId);
        
        if (published.payload.v == unpublished.payload.v) {
            console.log(`Skipping unchanged draft ${published.payload.title}`);
            continue;
        }
        
        fs.appendFileSync(outputFilePath, `<h2>${unpublished.payload.title}</h2>`);
        fs.appendFileSync(outputFilePath, `<h3>Hack Id: ${unpublished.payload.hackId}</h3>`);
        // indicate pre-formatted
        fs.appendFileSync(outputFilePath, `<pre style='white-space:pre-wrap'>`);
        const publishedContent = JSON.stringify(published.payload.segments, null, 4);
        const unpublishedContent = JSON.stringify(unpublished.payload.segments, null, 4);

        const diff = Diff.diffChars(publishedContent, unpublishedContent);

        for (const part of diff) {
            const backgroundColor = part.added ? 'green' : part.removed ? 'red' : 'white';
            const color = part.added ? 'white' : part.removed ? 'white' : 'grey';
            const span = `<span style='background-color:${backgroundColor};color:${color}'>${part.value}</span>`;
            fs.appendFileSync(outputFilePath, span);
        }
        // indicate no longer pre-formatted
        fs.appendFileSync(outputFilePath, '</pre>');
        console.log('here');
    }
    fs.appendFileSync(outputFilePath, '</html>');
}

diffDrafts()
    .then(() => {
        console.log('Done');
    })
    .catch(error => {
        console.log(error);
        console.log(error.stack);
        process.exit(1);
    });
