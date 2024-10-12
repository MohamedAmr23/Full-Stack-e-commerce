import express from 'express'
import dotenv from 'dotenv'
import dbConnection from './databases/dbConnection.js'
import morgan from 'morgan'
import { init } from './src/modules/index.routes.js'
dotenv.config()
const app = express()
const port = process.env.PORT || 8000
app.use(express.static('uploads'))
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static('uploads'))
init(app)
dbConnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

process.on('unhandledRejection',(err)=>{
    console.log(`unhandledRejection ${err}`)
})