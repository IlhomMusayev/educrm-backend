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
    static async TeacherCreatePostController(req, res, next) {
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

    static async TeacherUpdatePutCompleted(req, res, next) {
        try {
            permissionChecker('admin', req.user_permissions, res.error)

            const data = await AddTeacherValidation(req.body, res.error)

            const teacher_id = req.params.teacher_id

            const teacherItem = req.db.teachers.findOne({
                where: {
                    teacher_id: teacher_id
                }
            })

            if (!teacherItem) throw new Error(404, `Teacher not found`)

            const teacher = await req.db.teachers.updateOne(
                {
                    where: {
                        teacher_id
                    }
                },
                {   
                    user_id: data.user_id,
                    teacher_phone: data.phone,
                    teacher_skills: data.skills
                }
                
            )

            res.status(200).json({
                ok: true,
                message: "Teacher updated successfully"
            })

        } catch (error) {
            next(error)
        }
    }

    static async GetAllTeachersGetController(req, res, next){
        try{
            permissionChecker('admin', req.user_permissions, res.error);

			const page = req.query.page ? req.query.page - 1 : 0;
			const limit = req.query.limit || 15;
			const order = req.query.order == "DESC" ? "DESC" : "ASC";

            const teachers = await req.db.teachers.findAll({
                attributes: [
                    "teacher_id",
                    "teacher_phone", 
                    "teacher_skills",
                ],
                include: req.db.users,
                raw: true,
				limit: limit,
				offset: page * 15,
				order: [
					["createdAt", order]
				],
            })

            res.status(200).json({
				ok: true,
				message: "Teachers list",
				data: {
					teachers,
				},
			});

        } catch(error) {
            next(error)
        }
    }
}