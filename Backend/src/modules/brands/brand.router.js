import { Router } from "express";
import {
  createBrand,
  deleteBrand,
  getAllBrand,
  getBrand,
  updateBrand,
} from "./brand.controller.js";
import { validation } from "../../middelwares/validation.js";
import {
  createBrandSchema,
  getAndDeleteBrandSchema,
  updateBrandSchema,
} from "./brand.validation.js";
import { uploadSindleFile } from "../../middelwares/fileUpload.js";
import { allowTo, protectedRoutes } from "../auth/auth.controller.js";

const brandRouter = Router();

brandRouter
  .route("/")
  .post(
    protectedRoutes,
    allowTo("admin"),
    uploadSindleFile("logo", "brand"),
    validation(createBrandSchema),
    createBrand
  )
  .get(getAllBrand);

brandRouter
  .route("/:id")
  .get(validation(getAndDeleteBrandSchema), getBrand)
  .put(
    protectedRoutes,
    allowTo("admin"),
    validation(updateBrandSchema),
    updateBrand
  )
  .delete(
    protectedRoutes,
    allowTo("admin"),
    validation(getAndDeleteBrandSchema),
    deleteBrand
  );

export default brandRouter;
