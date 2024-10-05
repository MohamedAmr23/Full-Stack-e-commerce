import { productModel } from "../../../databases/models/product.model.js";
import slugify from "slugify";
import { AppError } from "../../../utils/AppError.js";
import { deleteOne } from "../handles/factor.handler.js";

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
  // pagination
  let page = req.query.page * 1 || 1;
  if (req.query.page <= 0) page = 1;
  let skip = (page - 1) * 5;

  // filter
  let filterObj = {...req.query};
  let excludedQuery = ["page", "sort", "fields", "keyword"];
  excludedQuery.forEach((ele) => {
    delete filterObj[ele];
  });
  filterObj = JSON.stringify(filterObj);
  filterObj = filterObj.replace(
    "/\b(gt|gte|lt|lte)\b/g",
    (match) => `$${match}`
  );
  filterObj = JSON.parse(filterObj);
  let mongoosesQuery = productModel.find(filterObj).skip(skip).limit(5);

  // sort
  if(req.query.sort){
    let sortedBy=req.query.sort.split(',').join(' ')
    mongoosesQuery.sort(sortedBy)
  }

  // search
  if (req.query.keyword) {
    mongoosesQuery.find({
      $or: [
        { title: { $regex: req.query.keyword, $options: "i" } },
        { description: { $regex: req.query.keyword, $options: "i" } },
      ],
    });
  }
  // search fields
    if(req.query.fields){
      let fields=req.query.fields.split(',').join(' ')
      mongoosesQuery.select(fields)
    }
  let result = await mongoosesQuery
  res.json({ msg: "success", page, result });
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
