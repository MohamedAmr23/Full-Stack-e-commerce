
import { Router } from "express";
import { signIn, signUp } from "./auth.controller.js";

const authRouter=Router()

authRouter.post('/signup',signUp)
authRouter.post('/signin',signIn)

export default authRouter