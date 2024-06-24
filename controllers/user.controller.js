const BaseController = require("./base");
const UserModel = require("../models/user.model");

class UserController extends BaseController {
  async register(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return UserController.sendFailedResponse(
          res,
          "Please enter required fields"
        );
      }

      const userExist = await UserModel.findOne({email})
      if(userExist){
        return UserController.sendFailedResponse(res,'User exist. Please try logging in')
      }

      const newUser = new UserModel(req.body);
      await newUser.save();
      return UserController.sendSuccessResponse(
        res,
        {message: "User created successfully"}
      );
    } catch (error) {
        return UserController.sendFailedResponse(res, this.server_error)
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return UserController.sendFailedResponse(
          res,
          "Please enter required fields"
        );
      }

      const userExist = await UserModel.findOne({email})
      if(!userExist){
        return UserController.sendFailedResponse(res,'User do not exist. Please register')
      }
      const isMatch = await userExist.comparePassword(password)
      if(!isMatch){
        return UserController.sendFailedResponse(res, 'Credentials do not match. Please check again')
      }

      const token = userExist.generateToken()

      return UserController.sendSuccessResponse(res, {message: 'Login Successful', token});
    } catch (error) {
        return UserController.sendFailedResponse(res, this.server_error)
    }
  }

  async getProfile(req, res) {
    try {
      return UserController.sendSuccessResponse(res, {message: req.user});
    } catch (error) {
        return UserController.sendFailedResponse(res, this.server_error)
    }
  }

  async uploadFile(req, res) {
    try {
      console.log(req.files)
      return UserController.sendSuccessResponse(res, { message: 'File uploaded successfully' });
    } catch (error) {
        console.log(error, 'the error')
        return UserController.sendFailedResponse(res, this.server_error)
    }
  }

}


module.exports = UserController;
