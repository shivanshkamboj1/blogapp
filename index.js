const express = require('express')
const app=express();
require('dotenv').config();
const path= require('path')


app.use(express.json());
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

app.get('/',(req,res)=>{
    res.render("home")
})

app.listen(process.env.PORT,()=>{
    console.log("app is running at ",process.env.PORT);
})
