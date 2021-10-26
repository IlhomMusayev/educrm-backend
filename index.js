const express = require("express");
const app = express();
const routes = require("./routes/routes");
const postgres = require("./modules/postgres/postgres");
const customErrorMiddleware = require("./middlewares/customErrorMiddleware");
require('dotenv').config()

async function server() {
	try {
		app.listen(process.env.PORT || 3000, () =>
			console.log(`SERVER READY ${process.env.PORT || 3000}`)
		);

		const db = await postgres();

		app.use(async (req, res, next) => {
            req.db = await db;
            next();
        });

		app.use(customErrorMiddleware);

		app.use(express.json());
		app.use(express.urlencoded({ extended: true }));

	} catch (error) {
		console.log("SERVER ERROR", error);
	} finally {
		routes(app);
	}
}

server()