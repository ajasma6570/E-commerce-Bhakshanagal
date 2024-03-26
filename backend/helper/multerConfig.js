import multer from "multer"
 
const ProductAdd = multer.diskStorage({
  
   destination: (req,file,cd) => {
       cd(null, "../Bhakshanagal/frontEnd/public/Pictures")
   }, 
   filename:(req,file,cd)=> {
       const originalFileName = file.originalname;
       const fileNameWithoutSpaces = originalFileName.replace(/\s/g, ''); // Remove all spaces
       cd(null, fileNameWithoutSpaces);
   }
})

export  const ProductImageUpload = multer({storage :ProductAdd}) 