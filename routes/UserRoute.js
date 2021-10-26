const Router = require('express');
const UserController = require('../controller/UserController.js')

const UserRouter = Router();

UserRouter.post('/users', UserController.SignInController);

module.exports = UserRouter;