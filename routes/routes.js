const errorHandler = require("../helpers/errorHandler");

module.exports = async function (app) {
    try {
        app.use("/user", require("./UserRoute"));
        app.use("/", require("./HomeRoute"));
        app.use('/teachers', require("./TeachersRoute"));
        app.use('/courses', require("./CoursesRoute"));

    } finally {
        app.use(errorHandler);
    }
};