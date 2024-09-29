import { Router } from "express";
import { createCategory, deleteCategory, getAllCategory, getCategory, updateCategory } from "./category.controller.js";
import subCategoryRouter from '../subCategory/subCategory.router.js'

const categoryRouter=Router()

categoryRouter.use('/:categoryId/subcategories',subCategoryRouter)

categoryRouter.route("/").post(createCategory).get(getAllCategory);
categoryRouter
  .route("/:id")
  .get(getCategory)
  .delete(deleteCategory)
  .put(updateCategory);



export default categoryRouter