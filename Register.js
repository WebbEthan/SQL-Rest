const http = require("http");
const fileSystem = require("fs");

let html;
fileSystem.readFile("StoreData.html", (error, htmldata) => {
    if (error) throw error;
    html = htmldata;
});
http.createServer((req, res) => {
    res.write(html);
    if (req.method == "POST")
    {

    }
    else
    {
        fileSystem.readFile(req.url, (error, data) => {
            res.end(data);
        });
    }
}).listen(3000);