const Task = require('../database/models/TaskModel')

module.exports = {

    async index(req, res) {


        await Task.findAll()
            .then(data => {
                return res.json(data)
            })
            .catch(error => {
                return res.status(400).json(error.original)
            })


    },


    async store(req, res) {

        const { description, done } = req.body

        await Task.create({ description, done })
            .then(data => {
                return res.json(data)
            })
            .catch(error => {
                return res.status(400).json(error.original)
            })

    },


    async indexPk(req, res) {


        const { taks_id } = req.params

        await Task.findByPk(taks_id)
            .then(data => {
                return res.json(data)
            })
            .catch(error => {
                return res.status(400).json(error.original)
            })


    },

    async delete(req, res) {

        const { task_id } = req.params

        await Task.destroy({ where: { id: task_id } })
            .then(data => {
                return res.json(data)
            })
            .catch(error => {
                return res.status(400).json(error.original)
            })
    },

    async update(req, res) {


        const { task_id } = req.params
        console.log(task_id)

        const { description, done } = req.body

        await Task.update(

            { description: description, done: done },
            { where: { id: task_id } }
        )
            .then(data => {
                return res.json(data)
            })
            .catch(error => {
                return res.status(400).json(error.original)
            })


    }










}