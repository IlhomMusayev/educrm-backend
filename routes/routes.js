import HomeRoute from "./HomeRoute.js";
import errorHandler from "../helpers/errorHandler.js";
import UserRoute from "./UserRoute.js";

export default function(app) {
    try {
        app.use('/', HomeRoute)
        app.use('/user', UserRoute)
    } finally {
        app.use(errorHandler);
    }
}
