import { Router } from "express";
import { createSubCategory, deleteSubCategory, getAllSubCategories, getSubCategory, updateSubCategory } from "./subCategory.controller.js";
import { validation } from "../../middelwares/validation.js";
import { createsubCategorySchema, getAndDeletesubCategorySchema, updatesubCategorySchema } from "./subCategory.validation.js";

const subCategoryRouter=Router({mergeParams:true})



subCategoryRouter.route("/").post(validation(createsubCategorySchema),createSubCategory).get(getAllSubCategories);
subCategoryRouter
  .route("/:id")
  .get(validation(getAndDeletesubCategorySchema),getSubCategory)
  .delete(validation(getAndDeletesubCategorySchema),deleteSubCategory)
  .put(validation(updatesubCategorySchema),updateSubCategory);
export default subCategoryRouter