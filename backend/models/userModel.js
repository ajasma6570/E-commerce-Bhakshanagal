import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
    

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    admin: {
        type: Number,
        default: 0,
      
      },
      userprofile:{
        type: String,
        default:"usernoprofile.webp"
        
      },
},
{ timestamps: true })

userSchema.methods.matchPassword = async function(enteresPassword){
    return await bcrypt.compare(enteresPassword, this.password)
  }
  
  userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
      next();
      return; 
    }
  
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      next(error); // Pass any error to the next middleware
    }
  });
  
  const User = mongoose.model("User", userSchema);
  
  export default User;