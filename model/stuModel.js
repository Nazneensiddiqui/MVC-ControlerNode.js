const mongoose=require("mongoose");
const stuScheem=new mongoose.Schema({
    stuno:Number,
    name:String,
    city:String,
    salary:Number
})
module.exports=mongoose.Model("student",stuScheem);