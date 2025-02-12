const jwt=require('jsonwebtoken')
require('dotenv').config();

const generateToken=(user)=>{
    const payload={
        _id:user._id,
        email:user.email,
        role:user.role
    }
    const token = jwt.sign(payload,process.env.SECRET)
    return token;
}
const validateToken=(token)=>{
    return jwt.verify(token,process.env.SECRET)
}
module.exports={generateToken,validateToken}