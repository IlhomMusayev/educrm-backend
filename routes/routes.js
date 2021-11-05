const errorHandler = require("../helpers/errorHandler");

module.exports = async function (app) {
    try {
        app.use("/user", require("./UserRoute"));
        app.use("/", require("./HomeRoute"));


    } finally {
        app.use(errorHandler);
    }
};