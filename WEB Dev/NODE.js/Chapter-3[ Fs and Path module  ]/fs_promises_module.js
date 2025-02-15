// import fs from 'node:fs/promises'

const fs = require('fs/promises')

async function main(fs) {
    
await fs.readFile('zarhan.txt')

await fs.appendFile('zarhan.txt', '\n zarhan is lazy', (d) => {
    console.log(d);

})

console.log('done');
};

main(fs)

