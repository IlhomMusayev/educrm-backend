const Router = require('express');

const HomeRouter = Router();

HomeRouter.get('/', (req, res, next) => {
    
    res.json({
        ok: true,
        message: 'Welcome to the API'
    });
    // next(new Error('Username is invalid', 500));
})

module.exports = HomeRouter;