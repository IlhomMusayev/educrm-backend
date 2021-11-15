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

module.exports = class TeacherController {
	static async TeacherCreatePostController(req, res, next){
        try {
            permissionChecker('admin', req.user_permissions, res.error)


            const data = await AddTeacherValidation(req.body, res.error)

            const teacher = await req.db.teachers.create({
                user_id: data.user_id,
                teacher_phone: data.phone,
                teacher_skills: data.skills
            })
            


            res.json({
                ok: true,
                message: 'Teacher created successfully',
                data: {
                    teacher
                }
            })
        } catch (error) {
            if (error.message == "Validation error") {
                error.message = "This user is already teacher";
                error.errorCode = 400;
            }
            next(error)
        }
    }
}