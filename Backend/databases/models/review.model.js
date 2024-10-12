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
    rating:{
      type:Number,
      min:1,
      max:5
    }
  },
  { timestamps: true }
);

reviewSchema.pre(/^find/,function(){
  this.populate('user','name')
})
export const reviewModel=mongoose.model('review',reviewSchema)