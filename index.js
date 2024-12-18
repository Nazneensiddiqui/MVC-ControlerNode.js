
const express=require("express");
const app=express();
const mongoose=require("mongoose")
const stuRouter=require("./Route/StudentRouter");

mongoose.connect("mongodb://127.0.0.1:27017/laiba").then(()=>{
    console.log("db connect")
})

app.set("view engine" , "ejs")
app.use("/" ,stuRouter);



app.listen(8100 , ()=>{
    console.log("server run on 8100");
})
