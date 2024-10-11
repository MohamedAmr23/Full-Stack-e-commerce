import { userModel } from "../../../databases/models/user.model.js";
import { AppError } from "../../../utils/AppError.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
// function to handle error
const catchError = (fn) => {
    return (req, res, next) => {
      fn(req, res, next).catch((err) => {
        next(err);
      });
    };
  };

export const signUp = catchError(async (req, res, next) => {
  let isFount = await userModel.findOne({ email:req.body.email });
  if (isFount) return next(new AppError("email is already exist", 409));
  let user = new userModel(req.body);
  await user.save();
  res.json({ msg: "signup successfully", user });
});

export const signIn = catchError(async (req, res, next) => {
  const { email, password } = req.body;
  let isFound = await userModel.findOne({ email });
  if (!isFound) {
    return next(new AppError("Incorrect email or password", 401));
  }
  let isMatch = await bcrypt.compare(password, isFound.password);
  if (isFound && isMatch) {
    let token = jwt.sign({
      name: isFound.name,
      userId: isFound._id,
      role: isFound.role
    },'mohamed');
    return res.json({ message: "success", token });
  }
  next(new AppError("incorrect email or password", 401));
});


export const protectedRoutes=catchError(async(req,res,next)=>{
  let { token }=req.headers
  if(!token) return next(new AppError('token not found',401))

  let decoded=await jwt.verify(token,'mohamed')  

  let user=await userModel.findById(decoded.userId)
  if(!user) return next(new AppError('invalid token',401)) 

  if(user.passwordChangedAt){
    let changePasswordDate=parseInt(user.passwordChangedAt.getTime() / 1000)
    if(changePasswordDate > decoded.iat)  return next(new AppError('invalid token',401))
  }  
   req.user=user
   next() 
})


export const allowTo=(...roles)=>{

  return catchError(async (req,res,next)=>{
    if(!roles.includes(req.user.role))  return next(new AppError('you are not authorized to access this route you are '+ req.user.role,401))
      next()
  }) 
}