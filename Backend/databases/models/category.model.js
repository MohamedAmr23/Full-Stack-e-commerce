import mongoose from "mongoose";


const categorySchema = mongoose.Schema(
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
    image: String,
  },
  { timestamps: true }
);
categorySchema.post('init',(doc)=>{
  doc.image=process.env.BASE_URL + 'category/'+doc.image
})
export const categoryModel=mongoose.model('category',categorySchema)