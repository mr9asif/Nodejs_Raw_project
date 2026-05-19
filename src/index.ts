import http from "http";

const server = http.createServer((req, res)=>{
    res.end("hello from server");
})

server.listen(3000, ()=>{
    console.log("server running on 3000")
})