import express  from "express";
import { productList, registerUser, userLogin } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.route('/userRegister').post(registerUser)
userRouter.route('/userLogin').post(userLogin)
userRouter.route('/listProduct').get(productList)

export default userRouter;