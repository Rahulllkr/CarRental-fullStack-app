import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

export const protect = async(req,res,next) => {
    const token = req.headers.authorization
    // console.log(req.headers)
    if(!token){
        return res.json({success:false,message:"not authorized"})
    }

    try{
        const userId = jwt.decode(token,process.env.JWT_SECRET_KEY)
        if(!userId){
           return res.json({success:false,message:"not authorized"})
        }

         req.user = await User.findById(userId).select("-password")
        console.log(req.user)
        // req.user = user
        next()
    }
    catch(err){
        console.log(err.message)
        return res.json({success:false,message:err.message})
    }
}