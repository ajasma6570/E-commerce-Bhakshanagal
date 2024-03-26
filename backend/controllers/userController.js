import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js'
import { generateToken } from '../config/generateToken.js';
import Products from '../models/ProductModel.js';

const registerUser = asyncHandler(async(req, res)=>{
    const {name,email, password} = req.body;

    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please Enter all the Fields");
    }

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error("User already exists"); 
    }
 
    const newUser = await User.create({
        name,
        email,
        password
    });

    if(newUser) {
        res.status(201).json({
            _id:newUser._id,
            name:newUser.name,
            email:newUser.email,
            token:generateToken(newUser._id)
        })
    }else{
        res.status(400)
        throw new Error("User not found");
    }
})


const userLogin = asyncHandler(async(req, res)=> {
    const {email, password} = req.body;

    const user = await User.findOne({email})
   
    if(user && (await user.matchPassword(password))) {
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error("User not found");
    }
})


const productList=asyncHandler(async(req,res)=>{

    const products = await Products.find({})
   
    if(products){
        res.status(201).json({products })
    }else{
        res.status(400)
        throw new Error("something error!!");
    }
    
})

export {
    registerUser,
    userLogin,
    productList
} 