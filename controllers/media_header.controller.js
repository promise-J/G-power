const BaseController = require("./base");
const MediaHeaderModel = require("../models/media_header.model");
const { processImages, imageCleanUp } = require("../middleware/upload");
const { empty } = require("../util");

class MediaHeaderController extends BaseController {
  async manageAboutImage(req, res) {
    try {
      let images = []
      images = processImages(req.files)
      const {media_type} = req.body
      
      if (empty(images)) {
        return MediaHeaderController.sendFailedResponse(
          res,
          {error: "Please provide image"}
        );
      }

      if (empty(media_type)) {
        await imageCleanUp(images)
        return MediaHeaderController.sendFailedResponse(
          res,
          {error: "Please provide media type"}
        );
      }

      if(!['about_header', 'vision_header', 'mission_header'].includes(media_type)){
        await imageCleanUp(images)
        return MediaHeaderController.sendFailedResponse(res, {error: 'Provide a valid media type'})
      }

      const current_media = await MediaHeaderModel.findOne({minsitry: 'godspower'})
      if(!empty(images)){
          const image = images[0]
          if(!empty(current_media)){
              const oldImage = []
              if(!empty(current_media[media_type])){
                  oldImage.push(current_media[media_type])
              }
              await imageCleanUp(oldImage)
              //update existing
              current_media[media_type] = image
              await current_media.save()
              return MediaHeaderController.sendSuccessResponse(res, {message: 'Image successfully uploaded'})
            }else{
                //create new one
                let addMedia = new MediaHeaderModel()
                
                addMedia[media_type] = image
                await addMedia.save()
                return MediaHeaderController.sendSuccessResponse(res, {message: 'Image successfully uploaded'})
          }
      }else{
        return MediaHeaderController.sendFailedResponse(res, {error: 'Provide image to proceed'})
      }

    } catch (error) {
        console.log(error)
        return MediaHeaderController.sendFailedResponse(res, this.server_error)
    }
  }

  async getMediaImages(req, res) {
    try {
        const allMediaImages = await MediaHeaderModel.findOne({minsitry: 'godspower'})
        if(empty(allMediaImages)){
            return MediaHeaderController.sendFailedResponse(res, {error: 'No media found. Please create new one'})
        }
        return MediaHeaderController.sendSuccessResponse(res, allMediaImages)
    } catch (error) {
        console.log(error)
        return MediaHeaderController.sendFailedResponse(res, this.server_error)
    }
  }

  async addGallery(req, res) {
    try {
      let images = []
      images = processImages(req.files)
      
      if (empty(images)) {
        return MediaHeaderController.sendFailedResponse(
          res,
          {error: "Please provide image"}
        );
      }


      const current_media = await MediaHeaderModel.findOne({minsitry: 'godspower'})
      if(!empty(images)){
          const image = images[0]
          if(!empty(current_media)){
              //update existing
              current_media['gallery_images'] = [image, ...current_media.gallery_images]
              await current_media.save()
              return MediaHeaderController.sendSuccessResponse(res, {message: 'Image successfully uploaded'})
            }else{
                //create new one
                let addMedia = new MediaHeaderModel()
                
                addMedia['gallery_images'] = [...image]
                await addMedia.save()
                return MediaHeaderController.sendSuccessResponse(res, {message: 'Image successfully uploaded'})
          }
      }else{
        return MediaHeaderController.sendFailedResponse(res, {error: 'Provide image to proceed'})
      }

    } catch (error) {
        console.log(error)
        return MediaHeaderController.sendFailedResponse(res, this.server_error)
    }
  }
}


module.exports = MediaHeaderController;
