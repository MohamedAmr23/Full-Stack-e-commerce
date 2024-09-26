import { request } from "express";
import mongoose from "mongoose";


const couponSchema = mongoose.Schema(
  {
    code: {
      type: String,
      unique: true,
      trim: true,
      required:[true,'coupon code required']
    },
    discount: {
       type:Number,
       min:0,
       required:[true,'coupon discount required']
    },
    expires: {
        type:Date,
        required:[true,'coupon date required']
    },
  },
  { timestamps: true }
);

export const couponModel=mongoose.model('coupon',couponSchema)