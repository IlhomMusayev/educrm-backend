const {
	SignInController,
	SignUpController,
	UserGetController,
} = require("../controllers/UserController");
const authMiddleware = require("../middlewares/authMiddleware");
const permissionMiddleware = require("../middlewares/permissionMiddleware");


const UserRouter = require("express").Router();

UserRouter.post("/sign_in", SignInController);
UserRouter.post(
	"/account",
	[authMiddleware, permissionMiddleware],
	SignUpController
);
UserRouter.get("/", [authMiddleware, permissionMiddleware], UserGetController);

module.exports = UserRouter;