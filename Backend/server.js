import express from 'express'
import dotenv from 'dotenv'
import dbConnection from './databases/dbConnection.js'
import categoryRouter from './src/modules/category/category.router.js'

dotenv.config()
const app = express()
app.use(express.json())

app.use('/api/v1/categories',categoryRouter)
const port = process.env.PORT || 8000
dbConnection()
app.get('/', (req, res) => res.send('Hello World!'))
app.all('*',(req,res)=>res.json({msg:`can't find route ${req.originalUrl}`}))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))