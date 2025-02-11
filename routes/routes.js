const {Router}=require('express')
const router = Router();
const {signup,signin} = require('../controllers/auth')
const User = require('../models/User')

router.get('/signup',signup)
router.get('/signin',signin)
router.post('/signup',async(req,res)=>{
    const {fullName,email,password}=req.body;
    const user = await User.create({
        fullName,email,password
    })
    return res.redirect("/")
})
router.post('/signin',async(req,res)=>{
    const {email,password}=req.body;
    const user =await User.matchPassword(email,password)
    console.log("user is ",user)
    res.redirect('/')
})

module.exports=router;