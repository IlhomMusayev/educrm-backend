const {
	SignInController,
    UserGetController,
    SignUpController
} = require("../controllers/UserController");

const UserRouter = require("express").Router();

UserRouter.get('/', UserGetController);
UserRouter.post("/sign_in", SignInController);
UserRouter.post('/account', SignUpController)


module.exports = UserRouter;