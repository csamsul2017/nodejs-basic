const fs = require('fs');
const path = require('path');
const fileInput = path.resolve(__dirname, 'input.txt');
const fileOutput = path.resolve(__dirname, 'output.txt');


const readableStream = fs.createReadStream(fileInput, {
    highWaterMark: 15
})
const writableStream = fs.createWriteStream(fileOutput)


readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`)
    } catch(error) {

    }
})

readableStream.on('end', () => {
    console.log('Done');
});

