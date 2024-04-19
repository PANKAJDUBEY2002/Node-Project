const http=require("http")

const myServer=http.createServer((req,res)=> {
    console.log("request arrived")
    res.end("Server is started")
})
myServer.listen(800,()=> console.log("listening started"))
