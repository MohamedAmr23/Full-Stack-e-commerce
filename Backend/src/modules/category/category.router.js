import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategory,
  updateCategory,
} from "./category.controller.js";
import subCategoryRouter from "../subCategory/subCategory.router.js";
import { validation } from "../../middelwares/validation.js";
import {
  createCategorySchema,
  getAndDeleteCategorySchema,
  updateCategorySchema,
} from "./category.validation.js";
import { uploadSindleFile } from "../../middelwares/fileUpload.js";

const categoryRouter = Router();

// merge params
categoryRouter.use("/:categoryId/subcategories", subCategoryRouter);

categoryRouter
  .route("/")
  .post(
    uploadSindleFile("image", "category"),
    validation(createCategorySchema),
    createCategory
  )
  .get(getAllCategory);
categoryRouter
  .route("/:id")
  .get(validation(getAndDeleteCategorySchema), getCategory)
  .delete(validation(getAndDeleteCategorySchema), deleteCategory)
  .put(
    uploadSindleFile("image", "category"),
    validation(updateCategorySchema),
    updateCategory
  );

export default categoryRouter;
