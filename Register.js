const http = require("http");
const fileSystem = require("fs");
const { parse } = require("querystring");

let html;
fileSystem.readFile("StoreData.html", (error, htmldata) => {
    if (error) throw error;
    html = htmldata;
});
const _server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    if (req.method == "GET")
    {
        fileSystem.readFile("./" + req.url, (error, data) => {
            if (error) throw error;
            res.end(data);
        });
        return;
    }
    else if (req.method == "POST")
    {
        console.log("Posted");
    }
    else if (req.method == "PUT")
    {
        _parseData(req, (data) => {
            fileSystem.writeFile("./" + req.url, JSON.stringify(data), (error) => {
                if (error) throw error;
                res.end("ok");
            });
        });
    }
    else
    {
        res.end("ok");
    }
});
_server.listen(3000);
function _parseData(request, cb)
{
    let body = '';
    request.on('data', chunk => { body += chunk.toString(); });
    request.on('end', () => { cb(parse(body)); });
}