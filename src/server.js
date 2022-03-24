require("dotenv").config()
require("./database")
const express = require("express")
const cors = require('cors')



const PORT = process.env.PORT || 3333

const routes = require('./routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(PORT)

