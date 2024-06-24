

class BaseController{
    constructor(){
        this.server_error = 'Something went wrong. Please try again later'
    }
    static sendFailedResponse(res, data){
        const result = {success: false}
        result.data = data
        return res.status(401).json(result)
    }
    static sendSuccessResponse(res, data){
        const result = {success: true}
        result.data = data
        return res.status(201).json(result)
    }
}


module.exports = BaseController