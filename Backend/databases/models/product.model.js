import mongoose from "mongoose";


const productSchema = mongoose.Schema(
  {
    title: {
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
    price: {
        type:Number,
        min:0,
        required:[true,'product price required']
    },
    priceAfterDiscount: {
        type:Number,
        min:0,
    },
    ratingAvg:{
        type:Number,
        min:[1,'rating average must be greater than 1'],        
        max:[5,'rating average must be less than 5'],        
    },
    ratingCount:{
        type:Number,
        min:0,
        default:0
    },
    description:{
        type:String,
        minLength:[5,'too short product description'],
        maxLength:[300,'too long product description'],
        required:[true,'product description required'],
        trim:true
    },
    quantity:{
        type:Number,
        min:0,
        default:0,
        required:[true,'product quantity required'],
    },
    sold:{
        type:Number,
        min:0,
        default:0,
    },
    imgCover:String,
    images:[String],
    category: {
        type:mongoose.Types.ObjectId,
        ref:"category",
        required:[true,'product category required'],
    },
    subCategory: {
        type:mongoose.Types.ObjectId,
        ref:"subCategory",
        required:[true,'product subCategory required'],
    },
    brand: {
        type:mongoose.Types.ObjectId,
        ref:"brand",
        required:[true,'product brand required'],
    },
  },
  { timestamps: true }
);
productSchema.post('init',(doc)=>{
    doc.imgCover=process.env.BASE_URL + 'product/'+doc.imgCover
    doc.images=doc.images.map(path=>process.env.BASE_URL + 'product/'+ path)
  })
export const productModel=mongoose.model('product',productSchema)