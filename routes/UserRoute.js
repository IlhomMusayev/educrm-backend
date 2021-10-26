const {
	SignInController,
    UserGetController
} = require("../controllers/UserController");

const UserRouter = require("express").Router();

UserRouter.get('/', UserGetController);
UserRouter.post("/sign_in", SignInController);


module.exports = UserRouter;