const {
    CoursesValidation
} = require("../modules/validations");
const {
    createToken
} = require("../modules/jwt")

const {
    generateHash,
    compareHash
} = require("../modules/bcrypt")

const CustomError = require('../helpers/CustomError')

const path = require("path")



const permissionChecker = require("../helpers/PermissionChecker");

module.exports = class CoursesController {
    static async createTeacher(req, res, next) {
        try {
            permissionChecker('admin', req.user_permissions, res.error);

            const data = await CoursesValidation(req.body, res.error);

            const file = req?.files?.course_photo;

            if (!file) throw new res.error(400, "Please upload a file");

            const fileName = file.md5 +"." + file.name.split(".")[file.name.split(".").length - 1];


            console.log(data)
            const course = await req.db.courses.create({
                course_title: data.course_title,
                course_description: data.course_description,
                course_photo: fileName,
                course_price: data.course_price,
                course_length: data.course_length,
            });


            file.mv(path.join(__dirname, "..", "public", "images", fileName))

            res.status(200).json({
                ok: true,
                message: "Course created successfuly"
            })

        } catch (error) {
            if(error.message == "Validation error"){
                error.message = "Course already exists",
                error.errorCode = 400
            }
            next(error)
        }
    }

}