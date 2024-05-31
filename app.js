import express from 'express'
import sequelize from './database/dbConnection.js'
import { bootstrap } from './modules/bootstrap.js'
import { userModel } from './database/models/user.model.js'
import { postModel } from './database/models/post.model.js'
import { commentModel } from './database/models/comment.model.js'
import cors from "cors"



const app = express()
const port = process.env.port || 3000

userModel.hasMany(postModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

postModel.belongsTo(userModel);

postModel.hasMany(commentModel, {
    onDelete: 'CASCADE',
});

userModel.hasMany(commentModel, {
    onDelete:'CASCADE',
})

commentModel.belongsTo(postModel);
commentModel.belongsTo(userModel);

sequelize.sync() 


app.use(cors())
app.use(express.json())
bootstrap(app)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))