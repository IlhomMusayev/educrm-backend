import Router from 'express';

const HomeRoute = await Router();

HomeRoute.get('/', (req, res) => {
    res.send('Hello World');
})

export default HomeRoute;