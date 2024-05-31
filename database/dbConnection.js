import { Sequelize } from 'sequelize'

const sequelize = new Sequelize("bqq0vlvvh3kakaolmkhb","uwh5264vd56jaokv","5FAzj3K03Zg373RD5Jab",{
    host:"bqq0vlvvh3kakaolmkhb-mysql.services.clever-cloud.com",
    dialect:"mysql"
})

sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully.')}).catch((err)=>{
        console.error('Unable to connect to the database:')
})


export default sequelize