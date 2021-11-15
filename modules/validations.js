const JOI = require('joi')
const CustomError = require('../helpers/CustomError')

module.exports = class Validations {
    static async SignInValidation(data, CustomError) {
        return await JOI.object({
            username: JOI.string().required().min(3).max(64).error(new CustomError(400, "Username is invalid")),
            password: JOI.string().required().min(5).error(new CustomError(400, "Password is invalid"))
        }).validateAsync(data)
    }

    static async SignUpValidation(data, CustomError) {
        return await JOI.object({
            name: JOI.string().required().min(3).max(64).error(new CustomError(400, "Name is invalid")),
            password: JOI.string().required().min(5).error(new CustomError(400, "Password is invalid")),
            username: JOI.string().required().min(3).max(64).error(new CustomError(400, "Username is invalid")),
            gender: JOI.string().required().valid("male", "female").error(new CustomError(400, "Gender is invalid"))
        }).validateAsync(data)
    }


    static async AddTeacherValidation(data, CustomError) {
        return await JOI.object({
            user_id: JOI.string().guid().required().error(new CustomError(400, "User_id is invalid")),
            phone: JOI.number().required().error(new CustomError(400, "Phone number is invalid")),
            skills: JOI.array().items(JOI.string()).required().error(new CustomError(400, "Skills in invalid"))
        }).validateAsync(data)
    }

    static async CoursesValidation(data, CustomError) {
        return await JOI.object({
            course_title: JOI.string().required().min(5).max(128).error(new CustomError(400, "Course title is invalid")),
            course_description: JOI.string().required().min(5).max(2048).error(new CustomError(400, "Course description is invalid")),
            course_price: JOI.number().required().error(new CustomError(400, "Course price is invalid")),
            course_length: JOI.number().required().error(new CustomError(400, "Course length is invalid")),
        }).validateAsync(data)
    }
    
}