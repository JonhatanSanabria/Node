const http = require("node:http")

const server = http.createServer((request, response) => {
    
    const method = request.method;
    const url = request.url

// GET localhost:8080/Kodemia/Node/    

if (method === "GET" && url === '/Kodemia/Node') {
    response.writeHead(200, {"X-men": "Wolverine", "Content-Type": "text/html" })
    response.end("<h2>Hola desde Node con GET</h2>")
}
else if (method === "POST" && url === '/Kodemia/Node') {
    response.writeHead(201, {"Avengers": "Tony Stark", "Content-Type": "text/html" })
    response.end("<h2>Hola desde Node con POST</h2>")
} 
else if (method === "GET" && url === '/') {
    response.writeHead(201, {"X-men": "Wolverine", "Content-Type": "text/html" })
    response.end("<h2>Raiz GET</h2>")
}
else {
    response.writeHead(404, {"Content-Type": "text/html" })
    response.end("<h2>NOT FOUND</h2>")
}
})


server.listen(8080, () => {
    console.log("server listening on port 8080")
})