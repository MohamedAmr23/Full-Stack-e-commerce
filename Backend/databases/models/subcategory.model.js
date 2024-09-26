import mongoose from "mongoose";


const subCategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: [true, "name is required"],
      minLength: [2, "too short category name"],
    },
    slug: {
      type: String,
      required: true,
      lowercase: true,
    },
    category: {
        type:mongoose.Types.ObjectId,
        ref:"category"
    },
  },
  { timestamps: true }
);

export const subCategoryModel=mongoose.model('subCategory',subCategorySchema)