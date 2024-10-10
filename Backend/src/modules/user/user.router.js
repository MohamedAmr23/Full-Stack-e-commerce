import { Router } from "express";
import { changeUserPassword, createUser, deleteUser, getAllUser, getUser, updateUser } from "./user.controller.js";


const userRouter = Router();

userRouter
  .route("/")
  .post(createUser)
  .get(getAllUser);

  userRouter
  .route("/:id")
  .get(getUser )
  .put(updateUser )
  .delete(deleteUser );

  userRouter.patch("/changeUserPassword/:id", changeUserPassword);
export default userRouter;
