import { subCategoryModel } from "../../../databases/models/subcategory.model.js"
import { AppError } from "../../../utils/AppError.js"
import slugify from "slugify"
import { deleteOne } from "../handles/factor.handler.js"
import { ApiFeatures } from "../../../utils/apiFeatures.js"
const catchError=(fn)=>{
    return (req,res,next)=>{
        fn(req,res,next).catch((err)=>{
            next()
        })
    }
}

export const createSubCategory=catchError(async(req,res)=>{
    const {name , category}=req.body

    let result=new subCategoryModel({name,category,slug:slugify(name)});
    await result.save();

    res.json({msg:'added success',result})

})

export const getAllSubCategories = catchError(async (req, res) => {
  let filter = {};
  if (req.params.categoryId) {
    filter = { category: req.params.categoryId };
  }
  // let result=await  subCategoryModel.find(filter)
  // res.json({msg:'success',result})
  let apiFeatures = new ApiFeatures(subCategoryModel.find(filter), req.query)
    .paginate()
    .filter()
    .sort()
    .search()
    .fields();
  let result = await apiFeatures.mongoosesQuery;
  res.json({ msg: "success", page: apiFeatures.page, result });
});


export const getSubCategory=catchError(async(req,res,next)=>{
    const {id}=req.params
    let result=await subCategoryModel.findById(id)
    !result && next(new AppError(`subcategory not found`,404))
    result && res.json({msg:'success',result})
})

export const updateSubCategory=catchError(async(req,res,next)=>{
    const {id}=req.params
    const {name,category}=req.body
    const subCategory=await subCategoryModel.findById(id)
    let result=await subCategoryModel.findByIdAndUpdate(id,{name:name.trim(),category,slug:slugify(name)},{new:true})
    !result && next(new AppError(`subcategory not found to be updated`,404))
    if(subCategory.name===name.trim())return res.status(400).json({ msg: "You haven't updated anything, the name is the same!" });
    result && res.json({msg:'update success',result})
})

export const deleteSubCategory=deleteOne(subCategoryModel)