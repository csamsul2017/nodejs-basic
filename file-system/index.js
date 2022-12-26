const fs = require('fs');

const readFileCallBack = (error, data) => {
    if(error) {
        console.log('berkas tidak ditemukan!');
        return;
    }

    console.log(data);
}

fs.readFile('notes.txt', 'utf-8', readFileCallBack)