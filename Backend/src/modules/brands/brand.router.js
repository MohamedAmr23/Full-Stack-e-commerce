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

const brandRouter = Router();

brandRouter
  .route("/")
  .post(uploadSindleFile('logo','brand'),validation(createBrandSchema), createBrand)
  .get(getAllBrand);

brandRouter
  .route("/:id")
  .get(validation(getAndDeleteBrandSchema), getBrand)
  .put(validation(updateBrandSchema), updateBrand)
  .delete(validation(getAndDeleteBrandSchema), deleteBrand);

export default brandRouter;
