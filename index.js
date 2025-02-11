const express = require('express')
const app=express();
require('dotenv').config();
const path= require('path')
const userRouter = require('./routes/routes')
const connectdb=require('./config/database')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))
connectdb();
app.get('/',(req,res)=>{
    res.render("home")
})
app.use('/user',userRouter)

app.listen(process.env.PORT,()=>{
    console.log("app is running at ",process.env.PORT);
})
