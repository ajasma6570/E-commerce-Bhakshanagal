import express from 'express'
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from './Routes/userRoutes.js';
import adminRouter from './Routes/adminRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB()

const app = express()
app.use(express.json())

const PORT = process.env.PORT

app.get('/',(req,res)=>{
    res.send("API is running");
})

app.use('/api/user',userRouter)
app.use('/api/admin',adminRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log("server started");
})