const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

async function auth(req, res, next) {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(401).json("Unable to access resource.");
    }
    const { id } = jwt.verify(token, process.env.SECRET);
    if(!id){
        return res.status(401).json('Something went wrong identifying user')
    }
    const user = await UserModel.findById(id)
    req.user = user
    next();
  } catch (error) {
    return res.status(500).json("Something went wrong during authentication");
  }
}

module.exports = auth;
