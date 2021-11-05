module.exports = function (err, req, res, next) {
	console.log(err);
	res.status(err.errorCode || 500).json({
		ok: false,
		message: err.message || 'Something broke!'
	});
};