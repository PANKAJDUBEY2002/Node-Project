const userRouter=require("./routes/user");
const express=require("express");
const {connectMongoDb}=require("./connection");
const app=express();
const PORT=8000;
connectMongoDb(" mongodb://127.0.0.1:27017/nodep")
app.use(express.urlencoded({extended:false}));
app.listen(PORT,()=>console.log("server stated successfully"));
app.use("/user",userRouter);
