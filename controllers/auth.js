const User = require('../models/User')

exports.signup=async(req,res)=>{
    return res.render('signup')
    
}
exports.signin=async(req,res)=>{
    return res.render('signin')
}