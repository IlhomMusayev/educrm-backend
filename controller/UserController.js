import Validations from "../modules/jwt";

export default class UserControllers {
    static async SignInController(req, req, next) {
        try {
            const { username, password } = await Validations.SignInValidation(req.body, res.error);
            console.log(username, password);

        } catch (error) {
            next(error)
        }
    }
}