async function GetData()
{
    const request = await fetch("http://127.0.0.1:5500/Users/request");
    const response = await request.text();
    console.log(response);
}
async function PostData(data)
{
    const request = await fetch("http://127.0.0.1:5500/Users", {
        method: "POST", 
        body: JSON.stringify(data)
    });
    const response = await request.json();
    console.log(response);
}
async function DeleteData()
{
    const request = await fetch("http://127.0.0.1:5500/Users/request", {method: "DELETE"});
    const response = await request.text();
    console.log(response);
}