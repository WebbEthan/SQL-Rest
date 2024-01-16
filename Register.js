const http = require("http");
const fileSystem = require("fs");

let html;
fileSystem.readFile("StoreData.html", (error, htmldata) => {
    if (error) throw error;
    html = htmldata;
});
const _server = http.createServer((req, res) => {
    if (req.method == "POST")
    {

    }
    else
    {
        res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        fileSystem.readFile(req.url, (error, data) => {
            if (error) throw error;
            res.end(data);
        });
    }
});
_server.listen(3000);