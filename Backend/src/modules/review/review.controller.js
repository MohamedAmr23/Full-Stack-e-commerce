
import { AppError } from '../../../utils/AppError.js'
import { deleteOne } from '../handles/factor.handler.js'
import { ApiFeatures } from '../../../utils/apiFeatures.js'
import { reviewModel } from '../../../databases/models/review.model.js'

// function to handle error
export const catchError=(fn)=>{
    return (req,res,next)=>{
      fn(req,res,next).catch((err)=>{
        next(err)
      })
    }
  }

export const createReview=catchError(async(req,res,next)=>{
    req.body.user=req.user._id
    let isReview=await reviewModel.findOne({user:req.user._id,product:req.body.product})
    if(isReview) return next(new AppError('you created a review before',409))
    let result=new reviewModel(req.body)
    await result.save()
    res.json({msg:"add review success",result})
})

export const getAllReview=catchError(async(req,res)=>{
  let apiFeatures= new ApiFeatures(reviewModel.find(),req.query)
  .paginate().filter().sort().search().fields()
  let result = await apiFeatures.mongoosesQuery;
  res.json({ msg: "success", page:apiFeatures.page, result });
})
export const getReview=catchError(async(req,res,next)=>{
    const {id}=req.params
    let result=await reviewModel.findById(id)
    !result && next(new AppError(`review not found`,404))
    result && res.json({ msg: "success", result });
})

export const updateReview=catchError(async(req,res,next)=>{
    const {id}=req.params
    let result=await reviewModel.findOneAndUpdate({_id:id,user:req.user._id},req.body,{new:true})
    !result && next(new AppError(`review not found or you are not authorized to perform this action`,404))
    result && res.json({ msg: "update success", result });
})
export const deleteReview=deleteOne(reviewModel)
