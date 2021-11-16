const {
    AddTeacherValidation
} = require("../modules/validations");
const {
    createToken
} = require("../modules/jwt")

const {
    generateHash,
    compareHash
} = require("../modules/bcrypt")

const permissionChecker = require("../helpers/PermissionChecker");

module.exports = class ApplicantsController {
   static async CreateApplicantPostController(req, res, next) {
    try {
        permissionChecker('admin', req.user_permissions, res.error)
        


        res.json({
            ok: true,
            message: "Applicant created successfully"
        })



    } catch (error) {
        console.log(error);
    }

   }
}