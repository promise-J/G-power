
const BaseController = require("./base");
const MediaHeaderModel = require("../models/media_header.model");
const {
  processImages,
  imageCleanUp,
  deleteImage,
} = require("../middleware/upload");
const { empty } = require("../util");
const AudioMessageModel = require("../models/audio.model");

class AudioController extends BaseController {
  async createAudio(req, res) {
    try {
      const { title, link, author, date } = req.body;

      if (
        empty(title) ||
        empty(link) ||
        empty(author) ||
        empty(date)
      ) {
        return AudioController.sendFailedResponse(res, {
          error: "Please enter required fields.",
        });
      }

      const existingAudio = await AudioMessageModel.findOne({ title });
      if (existingAudio) {
        return AudioController.sendFailedResponse(res, {
          error: "Audio with this title has already created",
        });
      }

      const audioData = {};
      audioData.link = link;
      audioData.author = author;
      audioData.title = title;
      audioData.date = date;

      const audioMessage = new AudioMessageModel(audioData);
      await audioMessage.save();

      if (empty(audioMessage)) {
        return AudioController.sendFailedResponse(res, {
          error: "Something went wrong. Could not create audio.",
        });
      } else {
        return AudioController.sendSuccessResponse(res, {
          message: "Audio created successfully.",
        });
      }
    } catch (error) {
      console.log(error);
      return AudioController.sendFailedResponse(res, this.server_error);
    }
  }

  async getAllDaddyAudios(req, res) {
    try {
      const allAudios = await AudioMessageModel.find({author: 'daddy'});
      return AudioController.sendSuccessResponse(res, allAudios);
    } catch (error) {
      console.log(error);
      return AudioController.sendFailedResponse(res, this.server_error);
    }
  }
  async getAllAudios(req, res) {
    try {
      const allAudios = await AudioMessageModel.find({});
      return AudioController.sendSuccessResponse(res, allAudios);
    } catch (error) {
      console.log(error);
      return AudioController.sendFailedResponse(res, this.server_error);
    }
  }
  async getAllMummyAudios(req, res) {
    try {
      const allAudios = await AudioMessageModel.find({author: 'mummy'});
      return AudioController.sendSuccessResponse(res, allAudios);
    } catch (error) {
      console.log(error);
      return AudioController.sendFailedResponse(res, this.server_error);
    }
  }

  async deleteAudio(req, res) {
    try {
      const audio_id = req.params.audio_id;
      if (!audio_id) {
        return AudioController.sendFailedResponse(res, {
          error: "Please provide an audio id",
        });
      }

      const audio = await AudioMessageModel.findById(audio_id);
      if (empty(audio)) {
        return AudioController.sendFailedResponse(res, {
          error: "Audio not found. Please check again.",
        });
      }
      const deleteAudio = await AudioMessageModel.findByIdAndDelete(audio_id);
      return AudioController.sendSuccessResponse(res, {
        message: "Audio successfully deleted",
      });
    } catch (error) {
      console.log(error);
      return AudioController.sendFailedResponse(res, this.server_error);
    }
  }

  async editAudio(req, res) {
    try {

      const audio_id = req.params.audio_id;
      const { date, link, author } = req.body;
      const audioData = {};
      if (empty(audio_id)) {
        return AudioController.sendFailedResponse(res, {
          error: "Please provide a valid audio id",
        });
      }
      if (!empty(link)) {
        audioData.link = link;
      }
      if (!empty(author)) {
        audioData.author = author;
      }
      if (!empty(date)) {
        audioData.date = date;
      }

      const existingAudio = await AudioMessageModel.findById(audio_id);

      if (empty(existingAudio)) {
        return AudioController.sendFailedResponse(res, {
          error: "Audio could not be found",
        });
      }

      console.log(audioData)
      const updatedAudio = await AudioMessageModel.findByIdAndUpdate(audio_id, audioData, {new: true})
      console.log(updatedAudio)

      return AudioController.sendSuccessResponse(res, {message: 'Audio updated successfully'})
     
    } catch (error) {
      console.log(error);
      return AudioController.sendFailedResponse(res, this.server_error);
    }
  }
}

module.exports = AudioController;
