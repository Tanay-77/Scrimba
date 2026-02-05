// lets create http server

import http from "http"
const PORT = 8000

const server = http.createServer((req,res)=>{
    res.write("this is tanay")
    res.end("done","utf8",()=>console.log("server is end"))
})

server.listen(PORT,()=>console.log("done"))