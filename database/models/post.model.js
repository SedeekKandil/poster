import { DataTypes } from "sequelize";
import sequelize from "../dbConnection.js";
import { commentModel } from "./comment.model.js";



export const postModel = sequelize.define("post",{
    title:{
        type:DataTypes.STRING(100)
    },
    content:{
        type:DataTypes.STRING(500)
    },deletedAt: {
        type: DataTypes.DATE,
    },  
}, {
    paranoid: true, 
})

