import express  from "express";
import { productList, productView, registerUser, userLogin } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.route('/userRegister').post(registerUser)
userRouter.route('/userLogin').post(userLogin)
userRouter.route('/listProduct').get(productList)
userRouter.route('/productView').post(productView)

export default userRouter;