import { DataTypes } from "sequelize";
import sequelize from "../dbConnection.js";
import { postModel } from "./post.model.js";
import { userModel } from "./user.model.js";


export const commentModel = sequelize.define("comment",{
    content:{
        type:DataTypes.STRING(500)
    }
})

// postModel.hasMany(commentModel,{
//     onDelete:'CASCADE'
// })

// commentModel.belongsTo(postModel)
// commentModel.belongsTo(userModel)