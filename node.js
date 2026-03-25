// lets create http server

import http from "http"
const PORT = 8000

const server = http.createServer((req,res)=>{
    res.write("this is tanay")
    res.end("done","utf8",()=>console.log("server is end"))
})

server.listen(PORT,()=>console.log("done"))

// lets use req now 

// const server2 = http.createServer((req,ress)=>{
//    if(req.url ==== "/api" && req.method === 'GET'){
//     res.end("done","utf8",()=>console.log("server is end"))
//    }
   
// })

// lets get accses by databaese 

// const server = http.createServer(async(req,res)=>{
//      const destinations = await getDataFromDB()
//     if(req.url===='/api'&& req.method="GET"){
//        res.setHeader('content-Type','application/json')
//        res.statuscode = 200
//        res.end(destinations)
//     }
// else{
//       res.setHeader('content-Type','application/json')
//        res.statuscode = 200
//        res.end(JSON.stringify({error:not found,message:wrong route}))  }
// })


// res.setHeader('content-Type','application/json')
//res.statuscode = 200


// lets get acces of data with url like  api/destination/continent

// let destination = data()

// if (req.url.startswith(api/continent) && req.method==="get"){
//    const continent = req.url.split(/).pop()   //    .split('/') → splits the string into an array //.pop() → takes the last element of the array
// const filterdata = destination.filter((destination)=>
    //   return destination.continent.tolowwercase=== continet.lowaercase )
// res.end(json.strignify(filterdata))
//}

// we can add html to our server now 

// const server = http.createServer((req,res)=>{
//     res.setStatusCode = 200
//     res.setHeader("Content-Type","text/html")
//     res.end('<html><h1>The server is working</h1></html>')
// })

// res.writeHead Method
// res.writeHead(200,{Content-Type":"text/html})

// path module 

// const __dirname = import..meta.dirname    // : It replaces the CommonJS __dirname variable in ES modules, allowing you to access the directory path of the current file without boilerplate code.
// const absPathToResource = path.join(__dirname, 'public', 'index.html')
//   const relPathToResource = path.join('public', 'index.html')
//   console.log('absolute: ', absPathToResource)
//   console.log('relative: ', relPathToResource)

// const path = require("path")
// conat newPath = path.join(__dirname,index.js)