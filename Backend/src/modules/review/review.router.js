import { Router } from "express";
import { allowTo, protectedRoutes } from "../auth/auth.controller.js";
import { createReview, deleteReview, getAllReview, getReview, updateReview } from "./review.controller.js";

const reviewRouter = Router();

reviewRouter
  .route("/")
  .post(
    protectedRoutes,
    allowTo("user"),
    createReview
  )
  .get(getAllReview);

reviewRouter
  .route("/:id")
  .get(getReview)
  .put(
    protectedRoutes,
    allowTo("user"),
    updateReview
  )
  .delete(
    protectedRoutes,
    allowTo("user"),
    deleteReview
  );

export default reviewRouter;
