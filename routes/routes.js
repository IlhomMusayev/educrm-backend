const errorHandler = require("../helpers/errorHandler");

module.exports = async function (app) {
    try {
        app.use("/user", require("./UserRoute"));
        app.use("/", require("./HomeRoute"));

        app.use(function (err, req, res, next) {
            res.status(err.status || 500).json({
                ok: false,
                code: err.code,
                message: err.message
            })
        });

    } catch (err) {
        next(err)
    }
};