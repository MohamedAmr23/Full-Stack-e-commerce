import { categoryModel } from "../../../databases/models/category.model.js";
import slugify from "slugify";
export const createCategory = async (req, res) => {
  const { name } = req.body;
  let result = new categoryModel({ name,slug:slugify(name) });
  await result.save();

  res.json({ msg: "success", result });
};

export const getAllCategory = async (req, res) => {
  let result = await categoryModel.find({});
  res.json({ msg: "success", result });
};
export const getCategory = async (req, res) => {
  const { id } = req.params;
  let result = await categoryModel.findById(id);
  res.json({ msg: "success", result });
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  let result = await categoryModel.findByIdAndDelete(id);
  res.json({ msg: "success", result });
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  let result = await categoryModel.findByIdAndUpdate(id, { name ,slug:slugify(name)});
  res.json({ msg: "success", result });
};


