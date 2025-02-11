const mongoose = require('mongoose')

const User = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profileImage:{
        type:String,
        default:'images/default.png'
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
},{timestamps:true})

module.exports = mongoose.model("User",User)