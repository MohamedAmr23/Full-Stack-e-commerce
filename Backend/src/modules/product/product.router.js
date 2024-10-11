import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProduct,
  updateProduct,
} from "./product.controller.js";
import { validation } from "../../middelwares/validation.js";
import {
  createProductSchema,
  getAndDeleteProductSchema,
} from "./product.validation.js";
import { uploadMixOfFiles } from "../../middelwares/fileUpload.js";
import { allowTo, protectedRoutes } from "../auth/auth.controller.js";

const productRouter = Router();

let fieldsArray=[
  { name: "imgCover", maxCount: 1 },
  { name: "images", maxCount: 10 },
];
productRouter
  .route("/")
  .post(protectedRoutes,allowTo('admin','user'),uploadMixOfFiles(fieldsArray,'product'),validation(createProductSchema), createProduct)
  .get(getAllProduct);
productRouter
  .route("/:id")
  .get(validation(getAndDeleteProductSchema), getProduct)
  .delete(protectedRoutes,allowTo('admin'),validation(getAndDeleteProductSchema), deleteProduct)
  .put(protectedRoutes,allowTo('admin'),updateProduct);

export default productRouter;
