require('dotenv').config()
const express = require('express')
const App = express();
const cors = require('cors')
const bodyparser= require('body-parser');
const port = process.env.port || 3500;
const EmailRoutes = require('./Routes/EmailRoutes')

App.use(cors({origin:'http://localhost:5173'}))
App.use(express.json())
App.use(bodyparser.json())
App.use(EmailRoutes)

const startServer = async () => {
    try {
        console.log("connected")
        App.listen(port, () => console.log(`port is running on ${port}`))
    } catch (error) {
        console.log(error)
    }
}

startServer();