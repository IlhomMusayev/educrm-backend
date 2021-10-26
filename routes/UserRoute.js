import Router from 'express';
import UserController from '../controller/UserController.js'

const UserRoute = await Router();

UserRoute.get('/users', UserController.SignInController)

export default UserRoute;