const User=require("./user")
const bcrypt=require('bcrypt')

const getuser=async(req,res)=>{
    try{
        const data=await User.find()
        if(!data){
            return res.status(404).json({message:"users not found"})
        }
        return res.status(200).json({message:"userfetched successfully ",data})
    }catch(error){
        return res.status(500).json({error:"internal server error",error})

    }
}

const postuser=async(req,res)=>{
    try{
        const {name,email,password}=req.body
        if(!name){
            return res.status(400).json({message:"please eneter your name  "})
        }
        if(!email){
            return res.status(400).json({message:"please eneter your email  "})
        }

        if(!password){
            return res.status(400).json({message:"please eneter your password  "})
        }        
        
 
        if(!email.includes("@")){
            return res.status(400).json({message:"please eneter valid email"})
        }
        
        if(password.length<8){
            return res.status(400).json({message:" password mininmum lenghth should be 8"})
        }
        const hashpass=await bcrypt.hash(password,10)
        const createUser=await User.create({
            name,
            email,
            password:hashpass
        })
        return res.status(400).json({message:"user created successfully ",createUser})

    }catch(error){
        return res.status(500).json({error:"internal server error",error})

    }
}

module.exports={getuser,postuser}
