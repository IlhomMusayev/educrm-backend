const {
	SignInController,
	SignUpController,
	UserGetController,
} = require("../controllers/UserController");
const authMiddleware = require("../middlewares/authMiddleware");

const UserRouter = require("express").Router();

UserRouter.post("/sign_in", SignInController);
UserRouter.post(
	"/account",
	[authMiddleware],
	SignUpController
);
UserRouter.get("/", [authMiddleware], UserGetController);

module.exports = UserRouter;