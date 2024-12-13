const express= require("express");
const route=express.Router();
const stuControllar=require("../Controllar/studentControllar")

route.get("/",stuControllar.stuHome);
route.get("/About",stuControllar.stuAbout);
route.get("/Contact", stuControllar.stuContact);

module.exports=route;