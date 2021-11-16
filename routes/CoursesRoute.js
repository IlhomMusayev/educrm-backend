const authMiddleware = require("../middlewares/authMiddleware");
const permissionMiddleware = require("../middlewares/permissionMiddleware");
const { createCourseController, GetAllCoursesGetController } = require("../controllers/CoursesController");

const expressfileupload = require("express-fileupload")


const CourseRouter = require("express").Router();

CourseRouter.use([authMiddleware, permissionMiddleware])

CourseRouter.post("/", expressfileupload(), createCourseController)
CourseRouter.get("/", expressfileupload(), GetAllCoursesGetController)


module.exports = CourseRouter;