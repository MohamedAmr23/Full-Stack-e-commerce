import mongoose from "mongoose";


const brandSchema = mongoose.Schema(
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
    logo: String
  },
  { timestamps: true }
);

export const brandModel=mongoose.model('brand',brandSchema)