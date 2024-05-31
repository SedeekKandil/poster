import { commentModel } from "../../database/models/comment.model.js"
import { postModel } from "../../database/models/post.model.js"
import { userModel } from "../../database/models/user.model.js"
import bcrypt from "bcrypt"

const signup = async (req,res)=>{
    await userModel.create(req.body)
    res.status(201).json({message:"success"})
}


const signin = async (req,res)=>{


    let emailExist = await userModel.findOne({
        attributes:["email","password"],
        where:{
            email:req.body.email
        }
    })

    if (emailExist) {
        let match = await bcrypt.compare(req.body.password, emailExist.password);
        if (match) {
            res.json({ message: "logged in" });
        } else {
            res.status(401).json({ message: "account or password is wrong" });
        }
    } else {
        res.status(401).json({ message: "account or password is wrong" });
    }
}




const getUserWithPostAndComments = async (req, res) => {
        const { userId, postId } = req.params;

        const user = await userModel.findOne({
            attributes:{
                exclude:"password"
            },
            where: { id: userId },
            include: [
                {
                    model: postModel,
                    where: { id: postId },
                    exclude:"deletedAt",
                    include: [
                        {
                            model: commentModel,
                        },
                    ],
                },
            ],
        });

        if (!user) return res.status(404).json({ message: 'User or Post not found' });
        res.json(user);
    }



export{
    signup,
    signin,
    getUserWithPostAndComments
}