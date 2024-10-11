import { deleteOne } from "../handles/factor.handler.js";
import { ApiFeatures } from "../../../utils/apiFeatures.js";
import { userModel } from "../../../databases/models/user.model.js";
import { AppError } from "../../../utils/AppError.js";

// function to handle error
export const catchError = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      next(err);
    });
  };
};

export const createUser = catchError(async (req, res, next) => {
  let user = await userModel.findOne({ email: req.body.email });
  if (user) return next(new AppError("user is already exist", 409));
  let result = new userModel(req.body);
  await result.save();
  res.json({ msg: "add user success", result });
});

export const getAllUser = catchError(async (req, res) => {
  let apiFeatures = new ApiFeatures(userModel.find(), req.query)
    .paginate()
    .filter()
    .sort()
    .search()
    .fields();
  let result = await apiFeatures.mongoosesQuery;
  res.json({ msg: "success", page: apiFeatures.page, result });
});
export const getUser = catchError(async (req, res, next) => {
  const { id } = req.params;
  let result = await userModel.findById(id);
  !result && next(new AppError(`user not found`, 404));
  result && res.json({ msg: "success", result });
});

export const updateUser = catchError(async (req, res, next) => {
  const { id } = req.params;
  // const { name } = req.body;
  // let user = await userModel.findById(id);
  let result = await userModel.findByIdAndUpdate(id, req.body, { new: true });
  !result && next(new AppError(`user not found`, 404));
  // if (user.name === name.trim())
  //   return res
  //     .status(400)
  //     .json({ msg: "You haven't updated anything, the name is the same!" });
  result && res.json({ msg: "update success", result });
});
export const deleteUser = deleteOne(userModel);

export const changeUserPassword = catchError(async (req, res, next) => {
  const { id } = req.params;
  req.body.passwordChangedAt=Date.now()
  let result = await userModel.findByIdAndUpdate(id, req.body, { new: true });
  !result && next(new AppError(`user not found`, 404));
  result && res.json({ msg: "change success", result });
});

