require('dotenv').config()
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const {CloudinaryStorage} = require('multer-storage-cloudinary')
const {empty} = require('../util/index')

// configure cloudinary
cloudinary.config({
    // secure: true,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

function getPublicIdFromUrl(imageUrl) {
  const splittedUrls = imageUrl.split('/')
  const res = splittedUrls[splittedUrls.length - 1].split('.')[0]
  if(res){
    return res
  }
  return null;
}

async function deleteImage(publicId) {
  console.log('delete image called')
  // try{
    const result = await cloudinary.uploader.destroy(publicId, function(err, result){
      if(err){
        return console.log(err)
      }
      console.log(result,'deleted successfully')
    });
}

function processImages(files){
  if(!empty(files)){
    const images = files.map(file=>{
      return {
        imageUrl: file.path,
        publicId: file.filename
      }
    })

    return images
  }
}

async function imageCleanUp(images){
  if(!empty(images) && !empty(images[0])){
    for(let i = 0; i < images.length; i++){
      await deleteImage(images[i].publicId)
    }   
  }
}



function createMulterInstance (folder, transformation) {
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: folder,
      transformation: transformation
    }
  })
  return multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      const allowedMimes = ['image/jpeg', 'image/jpg', 'image/png', 'video/mp4', 'video/quicktime'];

      if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
        } else {
          cb(new Error('Invalid file format. Only JPEG and PNG images are allowed.'), false);
        }
      }
  })
}
const image_uploader = createMulterInstance('godspower', [{width: 500, height: 500, crop: 'limit'}])

module.exports = { image_uploader, getPublicIdFromUrl, deleteImage, processImages, imageCleanUp }