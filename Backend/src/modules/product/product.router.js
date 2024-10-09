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

const productRouter = Router();

let fieldsArray=[
  { name: "imgCover", maxCount: 1 },
  { name: "images", maxCount: 10 },
];
productRouter
  .route("/")
  .post(uploadMixOfFiles(fieldsArray,'product'),validation(createProductSchema), createProduct)
  .get(getAllProduct);
productRouter
  .route("/:id")
  .get(validation(getAndDeleteProductSchema), getProduct)
  .delete(validation(getAndDeleteProductSchema), deleteProduct)
  .put(updateProduct);

export default productRouter;
