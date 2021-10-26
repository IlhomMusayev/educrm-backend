const Validations = require("../modules/validations");

module.exports = class UserController {
    static async SignInController(req, res, next) {
        try {
            const { username, password } = await Validations.SignInValidation(req.body, res.error);
            console.log(username, password);

        } catch (error) {
            next(error)
        }
    }
}