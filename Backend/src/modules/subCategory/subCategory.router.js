import { Router } from "express";
import {
  createSubCategory,
  deleteSubCategory,
  getAllSubCategories,
  getSubCategory,
  updateSubCategory,
} from "./subCategory.controller.js";
import { validation } from "../../middelwares/validation.js";
import {
  createsubCategorySchema,
  getAndDeletesubCategorySchema,
  updatesubCategorySchema,
} from "./subCategory.validation.js";
import { allowTo, protectedRoutes } from "../auth/auth.controller.js";

const subCategoryRouter = Router({ mergeParams: true });

subCategoryRouter
  .route("/")
  .post(
    protectedRoutes,
    allowTo("admin"),
    validation(createsubCategorySchema),
    createSubCategory
  )
  .get(getAllSubCategories);
subCategoryRouter
  .route("/:id")
  .get(validation(getAndDeletesubCategorySchema), getSubCategory)
  .delete(
    protectedRoutes,
    allowTo("admin"),
    validation(getAndDeletesubCategorySchema),
    deleteSubCategory
  )
  .put(
    protectedRoutes,
    allowTo("admin"),
    validation(updatesubCategorySchema),
    updateSubCategory
  );
export default subCategoryRouter;
