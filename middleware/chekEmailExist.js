import { userModel } from "../database/models/user.model.js"
import bcrypt from "bcrypt"


export const checkEmailExists =async (req,res,next)=>{
    // connection.execute(`select email from users where email='${req.body.email}'`,(err,data)=>{
        
    //     if(data?.length != 0) return res.status(409).json({message:"email already existed"})
    //     req.body.password = bcrypt.hashSync(req.body.password,8)
    //     next()
        
    // })


    
            let [created] = await userModel.findAll({
                attributes:["email"],
                where:{
                    email:req.body.email
                }
            })

            if(created) return res.status(409).json({message:"email already existed"})
                req.body.password = bcrypt.hashSync(req.body.password,8)
            next()
            
        }