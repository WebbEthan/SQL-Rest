async function GetData()
{
    const request = await fetch("http://127.0.0.1:5500/request", {
        method: "GET"
    });
    const response = await request.text();
    console.log(response);
}