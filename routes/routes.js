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
    try{
        const {email,password}=req.body;
        const token =await User.matchPasswordAndToken(email,password)
        console.log("user is ",token)
        res.cookie('token',token).redirect('/')
    }
    catch(error){
        return res.render('login',{
            error:'incorrect email or password'
        })
    }
})

module.exports=router;