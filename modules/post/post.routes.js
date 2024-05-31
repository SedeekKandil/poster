import { Router } from "express";
import { addPost, deletePost, getAllPosts, getPostWithUser, updatePost } from "./post.controller.js";


const postRouter = Router()


postRouter.route("/").post(addPost).get(getAllPosts)
postRouter.route("/:id").put(updatePost).delete(deletePost)
postRouter.get('/:postId',getPostWithUser);



export default postRouter