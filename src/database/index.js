require("dotenv").config()


const { Sequelize } = require('sequelize')




const connection = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
})


connection
    .authenticate()
    .then(() => console.log("Connection has been established successfully."))
    .catch((err) => console.error("Unable to connect to the database:", err));


const Task = require('./models/TaskModel')


Task.init(connection)
