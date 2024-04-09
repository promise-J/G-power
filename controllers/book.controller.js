const BaseController = require("./base");
const BookingModel = require("../models/b");

class BookingController extends BaseController {
  async createBook(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return BookingController.sendFailedResponse(
          res,
          "Please enter required fields"
        );
      }

      const userExist = await UserModel.findOne({email})
      if(userExist){
        return BookingController.sendFailedResponse(res,'User exist. Please try logging in')
      }

      const newUser = new UserModel(req.body);
      await newUser.save();
      return BookingController.sendSuccessResponse(
        res,
        {message: "User created successfully"}
      );
    } catch (error) {
        return BookingController.sendFailedResponse(res, this.server_error)
    }
  }

}


module.exports = BookingController;
