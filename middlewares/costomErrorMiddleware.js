import CustomError from '../helpers/costomError.js'

export default function customErrorMiddleware(req, res, next) {
	res.error = CustomError;
	next();
};