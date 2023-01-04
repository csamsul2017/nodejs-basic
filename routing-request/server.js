const http = require('http');
const port = 5000;
const host = 'localhost';

const reqListener = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;

    const { url, method } = req;

    if(url === '/') {
        if(method === 'GET') {
            res.end('<h1>Ini adalah homepage<h1>')
        } else {
            res.end(`Halaman tidak dapat diakses dengan ${method} request`)
        }
    } else if(url === '/about') {
        if(method === 'GET') {
            res.end('<h1>Halo! Ini adalah halaman about<h1>')
        } else if(method === 'POST') {
            let body = [];

            req.on('data', (chunk) => {
                body.push(chunk);
            })

            req.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                res.end(`Halo, ${name} Ini adalah halaman about`)
            })  
        } else {
            res.end(`Halaman tidak dapat diakses dengan ${method} request`)
        }
    } else {
        res.end('<h1>Halaman tidak ditemukan!<h1>')
    }
}

const server = http.createServer(reqListener);
server.listen(port, host, () => {
    console.log(`Server is running in http://${host}:${port}`)
})

