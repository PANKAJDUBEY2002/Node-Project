const http=require("http")
const url=require("url")
const myServer=http.createServer((req,res)=> {
    const myUrl=url.parse(req.url,true)
    switch(myUrl.pathname) {
        case "/" :
            res.end("This is Home Page")
            break
        case "/about" :
            res.end('Hii ,${myUrl.query.username}')
            break
        default :
            res.end("404 error")
    }
    console.log('${myUrl.pathname}')
   
})
myServer.listen(8000,()=> console.log("listening started"))
