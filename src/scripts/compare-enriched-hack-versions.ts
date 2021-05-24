import fs from 'fs';

async function compareEnrichedHackVersions() {
    const enriched = JSON.parse(fs.readFileSync('./staging-enriched-hacks.json').toString());
    const cache = JSON.parse(fs.readFileSync('./staging-enriched-hack-cache.json').toString());

    const differentVersions = [];
    for (let hack of enriched) {
        const hackInCache = cache.find((h: any) => h.id == hack.id);
        if (hack.v != hackInCache.v) {
            differentVersions.push({ hack, hackInCache, hackShouldBeAtLeastVersion: { id: hack.id, v: hackInCache.v + 1 } });
        }
    }

    fs.writeFileSync('./staging-enriched-hacks-should-be-version.json', JSON.stringify(differentVersions.map(h => h.hackShouldBeAtLeastVersion)));
}

compareEnrichedHackVersions()
    .then(() => {
        console.log('Done');
    })
    .catch(error => {
        console.log(error);
        console.log(error.stack);
        process.exit(1);
    });
