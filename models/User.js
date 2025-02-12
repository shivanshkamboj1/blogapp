const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const {generateToken} = require('../utils/authentication')
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
User.pre('save',async function(next){
    const user=this;
    if(!user.isModified())return;
    const hashedPassword=await bcrypt.hash(user.password,10)
    this.password=hashedPassword;
    next();
})
User.static('matchPasswordAndToken',async function(email,password){
    const user=await this.findOne({email});
    if(!user)return false;
    const result =await bcrypt.compare(password,user.password);
    if(!result)throw new Error("incorrect password")
    const token = generateToken(user);
    return token;
})
module.exports = mongoose.model("User",User)