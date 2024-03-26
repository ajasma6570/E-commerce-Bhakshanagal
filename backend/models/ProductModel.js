import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    
});

const productSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    brand: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    productimage: {
        type: Array,
        required:true,
        validate: [arrayLimit, "maximum 4 product images allowed"]
    },
    offerpercentage: {
        type: Number,
        required:true,
        default:0
      },
    offerprice: {
        type: Number,
        required:true,
        default:0
      },
      newProduct:{
        type:Boolean,
        required:true,
        default:true
      },

      reviews: [reviewSchema] 
})


function arrayLimit(val){
    return val.length<=4;
}

 const Products = mongoose.model('products',productSchema)
 
 export default Products;