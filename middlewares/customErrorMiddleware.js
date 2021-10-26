const CustomError = require('../helpers/customError.js')

module.exports = function customErrorMiddleware(req, res, next) {
	res.error = CustomError;
	next();
};