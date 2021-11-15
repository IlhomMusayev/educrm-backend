const authMiddleware = require("../middlewares/authMiddleware");
const permissionMiddleware = require("../middlewares/permissionMiddleware");
const { TeacherCreatePostController, TeacherUpdatePutCompleted } = require("../controllers/TeacherController")


const TeacherRouter = require("express").Router();

TeacherRouter.use([authMiddleware, permissionMiddleware])

TeacherRouter.post("/", TeacherCreatePostController);
TeacherRouter.post("/", TeacherCreatePostController);
TeacherRouter.put('/:teacher_id', TeacherUpdatePutCompleted)

module.exports = TeacherRouter;