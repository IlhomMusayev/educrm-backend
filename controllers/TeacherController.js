const {
	SignInValidation,
	SignUpValidation
} = require("../modules/validations");
const {
	createToken
} = require("../modules/jwt")

const {
	generateHash,
	compareHash
} = require("../modules/bcrypt")

const permissionChecker = require("../helpers/PermissionChecker");

module.exports = class TeacherController {
	static async TeacherCreatePostController(req, res, next){
        try {
            permissionChecker('admin', req.user_permissions, res.error)
            
            res.json({
                ok: true,
            })
        } catch (error) {
            next(error)
        }
    }
}