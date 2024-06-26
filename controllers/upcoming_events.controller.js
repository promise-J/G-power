const BaseController = require("./base");
const MediaHeaderModel = require("../models/media_header.model");
const {
  processImages,
  imageCleanUp,
  deleteImage,
} = require("../middleware/upload");
const { empty } = require("../util");
const UpcomingEventsModel = require("../models/upcomingEvents.model");

class UpcomingEventController extends BaseController {
  async createUpcomingEvent(req, res) {
    try {
      let images = [];
      images = processImages(req.files);
      const { title, date, location, time } = req.body;

      if (
        empty(images) ||
        empty(title) ||
        empty(location) ||
        empty(date) ||
        empty(time)
      ) {
        return UpcomingEventController.sendFailedResponse(res, {
          error: "Please enter required fields.",
        });
      }

      const existingEvent = await UpcomingEventsModel.findOne({ title });
      if (existingEvent) {
        return UpcomingEventController.sendFailedResponse(res, {
          error: "Event with this title has already created",
        });
      }

      const upcomingEventData = {};
      upcomingEventData.location = location;
      upcomingEventData.time = time;
      upcomingEventData.title = title;
      upcomingEventData.date = date;
      upcomingEventData.image = images[0];

      const upcomingEvent = new UpcomingEventsModel(upcomingEventData);
      await upcomingEvent.save();

      if (empty(upcomingEvent)) {
        await imageCleanUp(images);
        return UpcomingEventController.sendFailedResponse(res, {
          error: "Something went wrong. Could not create event.",
        });
      } else {
        return UpcomingEventController.sendSuccessResponse(res, {
          message: "Event created successfully.",
        });
      }
    } catch (error) {
      console.log(error);
      return UpcomingEventController.sendFailedResponse(res, this.server_error);
    }
  }

  async getAllUpcoming(req, res) {
    try {
      const allEvents = await UpcomingEventsModel.find();
      return UpcomingEventController.sendSuccessResponse(res, allEvents);
    } catch (error) {
      console.log(error);
      return UpcomingEventController.sendFailedResponse(res, this.server_error);
    }
  }

  async deleteEvent(req, res) {
    try {
      const event_id = req.params.event_id;
      if (!event_id) {
        return UpcomingEventController.sendFailedResponse(res, {
          error: "Please provide an event id",
        });
      }

      const event = await UpcomingEventsModel.findById(event_id);
      if (empty(event)) {
        return UpcomingEventController.sendFailedResponse(res, {
          error: "Event not found. Please check again.",
        });
      }
      const deleteEvent = await UpcomingEventsModel.findByIdAndDelete(event_id);
      await imageCleanUp([event.image]);
      return UpcomingEventController.sendSuccessResponse(res, {
        message: "Event successfully deleted",
      });
    } catch (error) {
      console.log(error);
      return UpcomingEventController.sendFailedResponse(res, this.server_error);
    }
  }

  async editEvent(req, res) {
    try {

      let images = [];
      const event_id = req.params.event_id;
      images = processImages(req.files);
      const { date, location, time } = req.body;
      const updateEventData = {};
      if (empty(event_id)) {
        await imageCleanUp(images);
        return UpcomingEventController.sendFailedResponse(res, {
          error: "Please provide a valid event id",
        });
      }
      if (!empty(location)) {
        updateEventData.location = location;
      }
      if (!empty(time)) {
        updateEventData.time = time;
      }
      if (!empty(date)) {
        updateEventData.date = date;
      }
      if (!empty(images)) {
        updateEventData.image = images[0];
      }

      const existingEvent = await UpcomingEventsModel.findById(event_id);

      if (empty(existingEvent)) {
        return UpcomingEventController.sendFailedResponse(res, {
          error: "Event could not be found",
        });
      }

      const updatedEvent = await UpcomingEventsModel.findByIdAndUpdate(event_id, updateEventData, {new: true})

      return UpcomingEventController.sendSuccessResponse(res, {message: 'Event updated successfully'})
     
    } catch (error) {
      console.log(error);
      return UpcomingEventController.sendFailedResponse(res, this.server_error);
    }
  }
}

module.exports = UpcomingEventController;
