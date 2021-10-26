const JOI = require('joi')

module.exports = class Validations {
    static async SignInValidation(data, next){
        return await JOI.object({
            username: JOI.string().required().min(3).max(64).error(new Error("Username is invalid")),
            password: JOI.string().required().min(5).error(new Error("Password is invalid"))
        }).validateAsync(data)
    }

    static async SignUpValidation(data, next){
        return await JOI.object({
            name: JOI.string().required().min(3).max(64).error(new Error("Gender is invalid")),
            email: JOI.string().required().email().error(new Error("Gender is invalid")),
            password: JOI.string().required().min(5).error(new Error("Gender is invalid")),
            username: JOI.string().required().min(3).max(64).error(new Error("Gender is invalid")),
            gender: JOI.string().required().valid("male", "female").error(new Error("Gender is invalid"))
        }).validateAsync(data)
    }
}