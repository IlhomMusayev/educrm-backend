const authMiddleware = require("../middlewares/authMiddleware");
const permissionMiddleware = require("../middlewares/permissionMiddleware");
const { TeacherCreatePostController, TeacherUpdatePutCompleted, GetAllTeachersGetController } = require("../controllers/TeacherController")


const TeacherRouter = require("express").Router();

TeacherRouter.use([authMiddleware, permissionMiddleware])

TeacherRouter.post("/", TeacherCreatePostController);
TeacherRouter.put('/:teacher_id', TeacherUpdatePutCompleted)
TeacherRouter.get('/', GetAllTeachersGetController)

module.exports = TeacherRouter;