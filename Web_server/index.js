const express=require("express")
const app=express()
app.get("/",(req,res)=> {
    res.end("This is Home page");
})
app.get("/about",(req,res)=> {
    res.end("Thiss is About Page "+req.query.user)
})



app.listen(8000,()=> console.log("listening started"))
