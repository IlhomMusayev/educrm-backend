const HomeRouter = require('../routes/HomeRoute');
const UserRouter = require('../routes/UserRoute');
const errorHandler = require('../helpers/errorHandler')

module.exports = function(app) {
    try {
        app.use('/', HomeRouter)
        app.use('/user', UserRouter)
        console.log(errorHandler);
    }
    finally {
        app.use(errorHandler);
    }
}   
