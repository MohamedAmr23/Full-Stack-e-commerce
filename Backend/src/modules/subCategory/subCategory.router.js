// import { Router } from "express";
// import { createSubCategory, deleteSubCategory, getAllSubCategories, getSubCategory, updateSubCategory } from "./subCategory.controller.js";

// const subCategoryRouter=Router()

// subCategoryRouter.route("/").post(createSubCategory).get(getAllSubCategories);

// subCategoryRouter
//   .route("/:id")
//   .get(getSubCategory)
//   .put(updateSubCategory)
//   .delete(deleteSubCategory);


// export default subCategoryRouter

import { Router } from "express";
import { createSubCategory, deleteSubCategory, getAllSubCategories, getSubCategory, updateSubCategory } from "./subCategory.controller.js";

const subCategoryRouter=Router()



subCategoryRouter.route("/").post(createSubCategory).get(getAllSubCategories);
subCategoryRouter
  .route("/:id")
  .get(getSubCategory)
  .delete(deleteSubCategory)
  .put(updateSubCategory);




export default subCategoryRouter