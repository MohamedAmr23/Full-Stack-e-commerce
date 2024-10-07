import { categoryModel } from "../../../databases/models/category.model.js";
import slugify from "slugify";
import { AppError } from "../../../utils/AppError.js";
import { deleteOne } from "../handles/factor.handler.js";
import { ApiFeatures } from "../../../utils/apiFeatures.js";

// function to handle error
const catchError=(fn)=>{
  return (req,res,next)=>{
    fn(req,res,next).catch((err)=>{
      next(err)
    })
  }
}
export const createCategory = catchError(async (req, res) => {
  // const { name } = req.body;
  req.body.slug=slugify(req.body.name)
  req.body.image=req.file.filename
  let result = new categoryModel( req.body );
  await result.save();

  res.json({ msg: "success", result });
});

export const getAllCategory = catchError(async (req, res) => {
  let apiFeatures= new ApiFeatures(categoryModel.find(),req.query)
  .paginate().filter().sort().search().fields()
  let result = await apiFeatures.mongoosesQuery;
  res.status(200).json({ msg: "success", page:apiFeatures.page, result });
});
export const getCategory = async (req, res,next) => {
  const { id } = req.params;
  let result = await categoryModel.findById(id);
  !result && next(new AppError(`category not found`,404))
   result && res.json({ msg: "success", result });
};

export const deleteCategory =deleteOne(categoryModel)

export const updateCategory =catchError( async (req, res,next) => {
  const { id } = req.params;
  req.body.slug=slugify(req.body.name)
  req.body.image=req.file.filename
  let category = await categoryModel.findById(id);
  let result = await categoryModel.findByIdAndUpdate(id,req.body,{new:true});
  !result && next(new AppError(`category not found`,404))
  if (category.name === name.trim()) return res.status(400).json({ msg: "You haven't updated anything, the name is the same!" });
  result && res.json({ msg: "success", result });
});


