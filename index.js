require('dotenv').config()
const express=require('express')
const app=express()
const PORT=process.env.PORT ||4000
const mongoose=require('mongoose')
const userRoutes=require("./userRoutes")


app.use(express.json())
app.use("/",userRoutes)


const connect=async()=>{
    try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("DB Connection Successfull")
    }catch(err){
        console.log("DB Connection Failed",err)
    }
}




app.listen(PORT, '0.0.0.0' ,()=>{
    console.log(`server is running in ${PORT}`)
    connect()
})