import { Router } from "express";
import { getUserWithPostAndComments, signin, signup } from "./user.controller.js";
import { checkEmailExists } from "../../middleware/chekEmailExist.js";


const userRouter = Router()


userRouter.post("/signup", checkEmailExists, signup)
userRouter.post("/signin",signin)
userRouter.get('/users/:userId/posts/:postId', getUserWithPostAndComments);




export default userRouter