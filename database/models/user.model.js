import { DataTypes } from "sequelize";
import sequelize from "../dbConnection.js";
import { postModel } from "./post.model.js";



export const userModel = sequelize.define("user",{
    name:{
        type:DataTypes.STRING(100),
    },
    email:{
        type:DataTypes.STRING(100)
    },
    password:{
        type:DataTypes.STRING(100)
    }
})




