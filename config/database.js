const mongoose = require('mongoose')
require('dotenv').config();
async function connectdb(){
    try {
        mongoose.connect(process.env.DB_URL);  
        console.log("db connected")
    } catch (error) {
        console.log("error in connecting with db",error);
    }
}
module.exports=connectdb;