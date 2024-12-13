
const express=require("express");
const app=express();
const stuRouter=require("./Route/StudentRouter");
app.set("view engine" , "ejs")

app.use("/" ,stuRouter);



app.listen(8100 , ()=>{
    console.log("server run on 8100");
})
