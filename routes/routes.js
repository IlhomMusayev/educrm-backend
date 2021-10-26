const errorHandler = require("../helpers/errorHandler");

module.exports = async function (app) {
    try {
        app.use("/users", require("./UserRoute"));
        app.use("/", require("./HomeRoute"));

        app.use((req, res, next) => {
            res.status(404).send({
                status: 404,
                error: "Not found"
            })
        })
    } catch (err) {
        console.log(err);
    }
};