import { Router } from "express";
import { addComment, deleteComment, getAllComments, updateComment } from "./comment.controller.js";



const commentRouter = Router()

commentRouter.route("/").post(addComment).get(getAllComments)
commentRouter.route("/:id").put(updateComment).delete(deleteComment)



export default commentRouter