import JOI from 'joi'
import CustomError from '../helpers/costomError.js'
export default class Validations {
    static async SignInValidation(data, CustomError){
        return await JOI.object({
            username: JOI.string().required().min(3).max(64).error(new CustomError("Name is invalid")),
            password: JOI.string().required().min(5).error(new CustomError("Password is invalid"))
        }).validateAsync(data)
    }
}