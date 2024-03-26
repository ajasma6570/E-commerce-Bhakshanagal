import asyncHandler from 'express-async-handler';
import Product from '../models/ProductModel.js'

const ProductAdd = asyncHandler(async(req, res)=>{ 

    const { name, category, brand, quantity, price, description,offerpercentage ,offerprice, newProduct} = req.body;
 
    const arrImages = [];
    if (req.files) {
      for (let i = 0; i < req.files.length; i++) {
        arrImages.push(req.files[i].filename);
      }
    }

    try {
        const newProduct = new Product({
            name,
            category,
            brand,
            quantity,
            price,
            description,
         
            productimage: arrImages 
        });

        await newProduct.save(); 
        
        res.status(201).json("Product added successfully");
 
    } catch (error) {
        res.status(400)
        throw new Error("Product not added!");

}})

export {
    ProductAdd
} 