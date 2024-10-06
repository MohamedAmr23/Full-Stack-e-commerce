
import slugify from 'slugify'
import {brandModel} from '../../../databases/models/brand.model.js'
import { AppError } from '../../../utils/AppError.js'
import { deleteOne } from '../handles/factor.handler.js'
import { ApiFeatures } from '../../../utils/apiFeatures.js'

// function to handle error
export const catchError=(fn)=>{
    return (req,res,next)=>{
      fn(req,res,next).catch((err)=>{
        next(err)
      })
    }
  }

export const createBrand=catchError(async(req,res)=>{
    const {name}=req.body

    let result=new brandModel({name,slug:slugify(name)})
    await result.save()
    res.json({msg:"add brand success",result})
})

export const getAllBrand=catchError(async(req,res)=>{
  let apiFeatures= new ApiFeatures(brandModel.find(),req.query)
  .paginate().filter().sort().search().fields()
  let result = await apiFeatures.mongoosesQuery;
  res.json({ msg: "success", page:apiFeatures.page, result });
})
export const getBrand=catchError(async(req,res,next)=>{
    const {id}=req.params
    let result=await brandModel.findById(id)
    !result && next(new AppError(`brand not found`,404))
    result && res.json({ msg: "success", result });
})

export const updateBrand=catchError(async(req,res,next)=>{
    const {id}=req.params
    const {name}=req.body
    let result=await brandModel.findByIdAndUpdate(id,{ name ,slug:slugify(name)},{new:true})
    !result && next(new AppError(`brand not found`,404))
    result && res.json({ msg: "update success", result });
})
export const deleteBrand=deleteOne(brandModel)
