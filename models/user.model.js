const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    }
},{
    timestamps: true
})

userSchema.pre('save', async function(next){
    const user = this
    if(!user.isModified('password')){
        return next()
    }
    const hashedpassword = await bcrypt.hash(user.password, 10)
    user.password = hashedpassword
    next()
})

userSchema.methods.comparePassword = async function(password){
    return isMatch = await bcrypt.compare(password, this.password)
}
userSchema.methods.generateToken = function(){
    return jwt.sign({id: this._id}, process.env.SECRET, {expiresIn: '1d'})
}


const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel