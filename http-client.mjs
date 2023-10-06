import https from "https";

const endpoint = "https://eno3z8wzvchjp.x.pipedream.net/";
const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`Recieve data : ${data.toString()}`);
    })
});

const body = JSON.stringify({
    firstName: "Eko",
    lastName: "Khannedy",
})

request.write(body);
request.end();