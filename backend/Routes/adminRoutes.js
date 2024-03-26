import express  from "express";
import { ProductImageUpload } from "../helper/multerConfig.js";
import { ProductAdd } from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.route('/addProduct').post(ProductImageUpload.array("images")).post(ProductAdd)



export default adminRouter;