const JOI = require('joi')
const CustomError = require('../helpers/CustomError')

module.exports = class Validations {
    static async SignInValidation(data, CustomError){
        return await JOI.object({
            username: JOI.string().required().min(3).max(64).error(new CustomError(400, "Username is invalid")),
            password: JOI.string().required().min(5).error(new CustomError(400, "Password is invalid"))
        }).validateAsync(data)
    }

    static async SignUpValidation(data, CustomError){
        return await JOI.object({
            name: JOI.string().required().min(3).max(64).error(new CustomError(400, "Name is invalid")),
            password: JOI.string().required().min(5).error(new CustomError(400, "Password is invalid")),
            username: JOI.string().required().min(3).max(64).error(new CustomError(400, "Username is invalid")),
            gender: JOI.string().required().valid("male", "female").error(new CustomError(400, "Gender is invalid"))
        }).validateAsync(data)
    }
}