import { AppError } from "../../../utils/AppError.js"
export const catchError=(fn)=>{
    return (req,res,next)=>{
      fn(req,res,next).catch((err)=>{
        next(err)
      })
    }
  }
export const deleteOne=(model)=>{
   return catchError(async(req,res,next)=>{
        const {id}=req.params
        let result=await model.findByIdAndDelete(id)
        !result && next(new AppError(`Document not found`,404))
        result && res.status(200).json({ msg: "delete success", result });
    })
}
