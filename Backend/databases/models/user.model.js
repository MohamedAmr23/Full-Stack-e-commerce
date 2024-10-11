import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: [true, "name is required"],
      minLength: [2, "too short category name"],
    },
    email: {
      type: String,
      required: [true, "too short"],
      trim: true,
      unique: [true, "email must be unique"],
      minLength: 1,
    },
    password: {
      type: String,
      required: true,
      minLength: [6, "min 6 character"],
    },
    passwordChangedAt:Date,
    phone: {
      type: String,
      required: [true, "phone number required"],
    },
    profilePic: String,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
userSchema.pre("save", function () {
  this.password = bcrypt.hashSync(this.password, 7);
});
userSchema.pre("findOneAndUpdate", function () {
  if(this._update.password) this._update.password = bcrypt.hashSync(this._update.password, 7);
});
export const userModel = mongoose.model("user", userSchema);
