import express from 'express'
import dotenv from 'dotenv'
import dbConnection from './databases/dbConnection.js'
import categoryRouter from './src/modules/category/category.router.js'
import morgan from 'morgan'
import { AppError } from './utils/AppError.js'
import subCategoryRouter from './src/modules/subCategory/subCategory.router.js'
import brandRouter from './src/modules/brands/brand.router.js'
import productRouter from './src/modules/product/product.router.js'
dotenv.config()
const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use('/api/v1/categories',categoryRouter)
app.use('/api/v1/subcategories',subCategoryRouter)
app.use('/api/v1/brands',brandRouter)
app.use('/api/v1/products',productRouter)
const port = process.env.PORT || 8000

app.get('/', (req, res) => res.send('Hello World!'))
app.all('*',(req,res,next)=>{
    next(new AppError(`can't find route : ${req.originalUrl}`,404))
})

// global handle error middleware
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500
    res.status(statusCode).json({error:err.message,statusCode})
})
dbConnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))




process.on('unhandledRejection',(err)=>{
    console.log(`unhandledRejection ${err}`)
})