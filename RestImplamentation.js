async function GetData()
{
    const response = await fetch("http://127.0.0.1:3000/Users/request").then(response => response.text());
    console.log(response);
}
async function PostData(data)
{
    const response = await fetch("http://127.0.0.1:3000", {
        method: "post",
        body: JSON.stringify(data)
    }).then(response => response.json());
    console.log(response);
}
async function PutData(data)
{
    const response = await fetch("http://127.0.0.1:3000/Users/request", {
        method: "put",
        body: JSON.stringify(data)
    }).then(response => response.text());
    console.log(response);
}
async function DeleteData()
{
    const request = await fetch("http://127.0.0.1:5500/Users/request", {method: "DELETE"});
    const response = await request.text();
    console.log(response);
}