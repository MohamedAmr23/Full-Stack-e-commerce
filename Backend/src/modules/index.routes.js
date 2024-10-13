import { AppError } from "../../utils/AppError.js"
import authRouter from "./auth/auth.router.js"
import brandRouter from "./brands/brand.router.js"
import categoryRouter from "./category/category.router.js"
import productRouter from "./product/product.router.js"
import reviewRouter from "./review/review.router.js"
import subCategoryRouter from "./subCategory/subCategory.router.js"
import userRouter from "./user/user.router.js"
import dotenv from 'dotenv'
dotenv.config()
export function init(app){
app.use('/api/v1/categories',categoryRouter)
app.use('/api/v1/subcategories',subCategoryRouter)
app.use('/api/v1/brands',brandRouter)
app.use('/api/v1/products',productRouter)
app.use('/api/v1/users',userRouter)
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/review',reviewRouter)
app.get('/', (req, res) => res.send('Hello World!'))
app.all('*',(req,res,next)=>{
    next(new AppError(`can't find route : ${req.originalUrl}`,404))
})
// global handle error middleware
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500
    res.status(statusCode).json({error:err.message,statusCode})
})
}
