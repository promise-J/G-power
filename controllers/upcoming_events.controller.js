const BaseController = require("./base");
const MediaHeaderModel = require("../models/media_header.model");
const { processImages, imageCleanUp, deleteImage } = require("../middleware/upload");
const { empty } = require("../util");
const UpcomingEventsModel = require("../models/upcomingEvents.model");

class UpcomingEventController extends BaseController {
  async createUpcomingEvent(req, res) {
    try {
      let images = []
      images = processImages(req.files)
      const {title, date, location, time} = req.body

      console.log(req.body,'the body')
      
      if (empty(images) || empty(title) || empty(location) || empty(date) || empty(time)) {
        return UpcomingEventController.sendFailedResponse(
          res,
          {error: "Please required fields."}
        );
      }

    const upcomingEventData = {}
    upcomingEventData.location = location
    upcomingEventData.time = time
    upcomingEventData.title = title
    upcomingEventData.date = date
    upcomingEventData.images = images[0]

    const upcomingEvent = new UpcomingEventsModel(upcomingEventData)
    await upcomingEvent.save()

    console.log(upcomingEvent)
    if(empty(upcomingEvent)){
        await imageCleanUp()
        return UpcomingEventController.sendFailedResponse(res, {error: 'Something went wrong. Could not create event.'})
    }else{
        return UpcomingEventController.sendSuccessResponse(res, {message: 'Event created successfully.'})
    }

    } catch (error) {
        console.log(error)
        return UpcomingEventController.sendFailedResponse(res, this.server_error)
    }
  }
}


module.exports = UpcomingEventController;
