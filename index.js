import express from 'express';
import dotenv from 'dotenv'
import routes from './routes/routes.js';
import customErrorMiddleware from './middlewares/costomErrorMiddleware.js'
import postgres from './modules/postgres/postgres.js';
dotenv.config()

const app = await express();
const PORT = process.env.PORT || 3000;

try {
    app.listen(PORT, () => {
        console.log('Example app listening on port '+ PORT);
        }
    );
    
    const db = await postgres() 
    
    app.use(async (req, res, next) => {
		req.db = await db;
		next();
	});
    
    app.use(customErrorMiddleware);


    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
} catch (error) {
    console.log("SERVER ERROR:" + error);
} finally {
    routes(app)
}