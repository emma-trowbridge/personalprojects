const fs = require('fs');

function checkForBear(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const firstLine = fileContent.trim().split('\n')[0];

    if (firstLine.toLowerCase().includes('bear')) {
        console.log("The first line contains the word 'bear'.");
    } else {
        console.log("The first line does not contain the word 'bear'.");
    }
}

//my txt file
const filePath = 'MSU-bears.txt';
checkForBear(filePath);
