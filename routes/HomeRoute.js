const Router = require('express');

const HomeRouter = Router();

HomeRouter.get('/', (req, res) => {
    res.json({
        ok: true,
        message: 'Welcome to the API'
    });
})

module.exports = HomeRouter;