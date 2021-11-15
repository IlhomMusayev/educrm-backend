const authMiddleware = require("../middlewares/authMiddleware");
const permissionMiddleware = require("../middlewares/permissionMiddleware");
const { createTeacher } = require("../controllers/CoursesController");

const expressfileupload = require("express-fileupload")


const CourseRouter = require("express").Router();

CourseRouter.use([authMiddleware, permissionMiddleware])

CourseRouter.post("/", expressfileupload(), createTeacher)


module.exports = CourseRouter;