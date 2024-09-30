import { Router } from "express";
import { createBrand, deleteBrand, getAllBrand, getBrand, updateBrand } from "./brand.controller.js";

const brandRouter=Router()

brandRouter.route('/').post(createBrand).get(getAllBrand)

brandRouter.route('/:id').get(getBrand).put(updateBrand).delete(deleteBrand)




export default brandRouter