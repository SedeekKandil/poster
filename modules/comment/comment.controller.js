import { commentModel } from "../../database/models/comment.model.js"
import { userModel } from "../../database/models/user.model.js"


const addComment = async (req,res)=>{
    await commentModel.create(req.body)
    res.json({message:"success"})
}

const getAllComments = async(req,res)=>{
    let {count, rows} =await commentModel.findAndCountAll({
        include: {
            model:userModel,
            attributes: ["name", "id"],  
        }
    })
    res.json({message:"success", AllComments:count, comments:rows})
}


const updateComment = async (req,res)=>{
    const {id} = req.params
    let [updated] = await commentModel.update({
        content:req.body.content,
        postId:req.body.postId,
        userId:req.body.userId
    },{
        where :{
            id: id
        }
    })
    if(updated){
        res.json({message:"success"})
    }else{
        res.json({message:"user not found"})
    }
    
}


const deleteComment = async (req,res)=>{
    const {id} = req.params
    let deleted = await commentModel.destroy({
        where:{
            id: id
        }
    })
    if(deleted){
        res.json({message:"success"})
    }else{
        res.json({message:"user not found"})
    }
}


export{
    addComment,
    getAllComments,
    updateComment,
    deleteComment,
}