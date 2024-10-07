import { Router } from "express";
import { createProduct, deleteProduct, getAllProduct, getProduct, updateProduct } from "./product.controller.js";
import { validation } from "../../middelwares/validation.js";
import { createProductSchema, getAndDeleteProductSchema } from "./product.validation.js";

const productRouter=Router()


productRouter.route("/").post(validation(createProductSchema),createProduct).get(getAllProduct);
productRouter
  .route("/:id")
  .get(validation(getAndDeleteProductSchema),getProduct)
  .delete(validation(getAndDeleteProductSchema),deleteProduct)
  .put(updateProduct);



export default productRouter