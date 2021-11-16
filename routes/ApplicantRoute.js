const authMiddleware = require("../middlewares/authMiddleware");
const permissionMiddleware = require("../middlewares/permissionMiddleware");
const { CreateApplicantPostController } = require("../controllers/ApplicantsControllers");

const ApplicantRouter = require("express").Router();

ApplicantRouter.use([authMiddleware, permissionMiddleware])

ApplicantRouter.post("/", CreateApplicantPostController)
// ApplicantRouter.get("/", expressfileupload(), GetAllCoursesGetController)


module.exports = ApplicantRouter;