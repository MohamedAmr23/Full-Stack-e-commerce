import { request } from "express";
import mongoose from "mongoose";


const reviewSchema = mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
      trim: true,
      required:[true,'review comment required']
    },
    user: {
        type:mongoose.Types.ObjectId,
        ref:'user'
    },
    product: {
        type:mongoose.Types.ObjectId,
        ref:"product"
    },
  },
  { timestamps: true }
);

export const reviewModel=mongoose.model('review',reviewSchema)