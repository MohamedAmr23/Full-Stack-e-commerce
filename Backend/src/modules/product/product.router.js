import { Router } from "express";
import { createProduct, deleteProduct, getAllProduct, getProduct, updateProduct } from "./product.controller.js";

const productRouter=Router()


productRouter.route("/").post(createProduct).get(getAllProduct);
productRouter
  .route("/:id")
  .get(getProduct)
  .delete(deleteProduct)
  .put(updateProduct);



export default productRouter