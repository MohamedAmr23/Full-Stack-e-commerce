import { productModel } from "../../../databases/models/product.model.js";
import slugify from "slugify";
import { AppError } from "../../../utils/AppError.js";
import { deleteOne } from "../handles/factor.handler.js";
import { ApiFeatures } from "../../../utils/apiFeatures.js";

// function to handle error
const catchError = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      next(err);
    });
  };
};

export const createProduct = catchError(async (req, res) => {
  req.body.slug = slugify(req.body.title);
  let result = new productModel(req.body);
  await result.save();

  res.json({ msg: "success", result });
});

export const getAllProduct = catchError(async (req, res) => {
 
  let apiFeatures= new ApiFeatures(productModel.find(),req.query)
  .paginate().filter().sort().search().fields()
  
  let result = await apiFeatures.mongoosesQuery;
  res.json({ msg: "success", page:apiFeatures.page, result });
});
export const getProduct = async (req, res, next) => {
  const { id } = req.params;
  let result = await productModel.findById(id);
  !result && next(new AppError(`product not found`, 404));
  result && res.json({ msg: "success", result });
};

export const deleteProduct = deleteOne(productModel);

export const updateProduct = catchError(async (req, res, next) => {
  const { id } = req.params;
  if (req.body.title) req.body.slug = slugify(req.body.title);
  let result = await productModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  !result && next(new AppError(`product not found`, 404));
  result && res.json({ msg: "success", result });
});
