const express = require('express');
require('dotenv').config();
const customErrorMiddleware = require('./middlewares/customErrorMiddleware')
const postgres = require('./modules/postgres/postgres')
const routes = require('./routes/routes')

const app = express();
const PORT = process.env.PORT || 3000;

async function start() {
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
}
start()