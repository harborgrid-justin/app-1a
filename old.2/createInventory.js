const fs = require('fs');
const path = require('path');
const glob = require('glob').glob;


// Define the directory and output file
const rootDir = './';  // Change this to the path of your root directory if needed
const outputFile = 'inventory.json';

glob(path.join(rootDir, '**/*'), { nodir: false }, (err, files) => {
    if (err) throw err;
    
    const inventory = files.map(file => path.relative(rootDir, file));
    
    fs.writeFileSync(outputFile, JSON.stringify(inventory, null, 2), 'utf-8');
    console.log('Inventory saved to', outputFile);
    console.log('Inventory saved to', path.resolve(outputFile));

});
