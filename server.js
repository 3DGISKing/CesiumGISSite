const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

process.on('uncaughtException', err => console.error('uncaughtException', err));
process.on('unhandledRejection', err => console.error('unhandledRejection', err));

const publicFolder = process.argv.length > 2 ? process.argv[2] : '.';
const port = process.argv.length > 3 ? process.argv[3] : 8080;

console.log(`publicFolder: ${publicFolder}`);

const mediaTypes = {
    zip: 'application/zip',
    jpg: 'image/jpeg',
    html: 'text/html',
    css: 'text/css',
    ttf: 'aplication/font-sfnt',
    woff: 'application/x-font-woff',
    woff2: 'application/font-woff2'
    /* add more media types */
};

const server = http.createServer(function(request, response) {
    const queryObject = url.parse(request.url,true).query;
    const pathName = url.parse(request.url,true).pathname;

    console.log(request.method + ' ' + request.url);

    if (request.url === '/') request.url = '/index.html';

    let filepath = path.join(publicFolder, pathName);

    if(pathName === '/')
        filepath = path.join(publicFolder, '/index.html');

    fs.readFile(filepath, function(err, data) {
        if (err) {
            response.statusCode = 404;
            console.log(`filepath ${filepath}`);

            return response.end('File not found or you made an invalid request.')
        }

        let mediaType = 'text/html';
        const ext = path.extname(filepath);

        if (ext.length > 0 && mediaTypes.hasOwnProperty(ext.slice(1))) {
            mediaType = mediaTypes[ext.slice(1)]
        }

        response.setHeader('Content-Type', mediaType);
        response.end(data)
    })
});

server.on('clientError', function onClientError(err, socket) {
    console.log('clientError', err);
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
});

server.listen(port, '127.0.0.1', function() {
    console.log('👨‍🔧 Development server is online.')
});