const express = require("express");

const TaskController = require("./controllers/TaskController")



const routes = express.Router()





routes.get("/tasks", TaskController.index)

routes.get("/tasks/:task_id", TaskController.indexPk)

routes.post('/tasks', TaskController.store)

routes.delete('/tasks/:task_id', TaskController.delete)

routes.put('/tasks/:task_id', TaskController.update)









module.exports = routes