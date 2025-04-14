const express= require("express")
const {getuser,postuser}=require("./userController")
const router=express.Router()

router.get('/',getuser)
router.post('/',postuser)


module.exports=router


