import { postModel } from "../../database/models/post.model.js"
import { userModel } from "../../database/models/user.model.js"



const addPost = async (req,res)=>{
    await postModel.create(req.body)
    res.json({message:"success"})
}

const getAllPosts = async(req,res)=>{
    let {count, rows} =await postModel.findAndCountAll({
        include: {
            model:userModel,
            attributes: ["name", "id"]
        }
    })
    res.json({message:"success", AllPosts:count, posts:rows})
}


const updatePost = async (req,res)=>{
    const {id} = req.params
    let [updated] = await postModel.update({
        title:req.body.title,
        content:req.body.content
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


const deletePost = async (req,res)=>{
    const {id} = req.params
    let deleted = await postModel.destroy({
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



const getPostWithUser = async (req, res) => {
        const { postId } = req.params;

        const post = await postModel.findOne({
            where: { id: postId },
            attributes:{
                exclude:["deletedAt","userId"],
            },
            
            include: [
                {
                    model: userModel,
                    attributes: ['id', 'name', 'email'], 
                },
            ],
        });

        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json(post);
};



export{
    addPost,
    getAllPosts,
    updatePost,
    deletePost,
    getPostWithUser
}