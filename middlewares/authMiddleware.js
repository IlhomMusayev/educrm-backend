const { verifyToken } = require("../modules/jwt");

module.exports = async function AuthMiddleware(req, res, next) {
    try {
        let token = req.headers.authorization;

        if (!token) {
            throw new Error(401, 'Token not found');
        }

        token = verifyToken(token)

        console.log(token);

        const session = await req.db.sessions.findOne({ 
            where: {
                session_id: token.session_id,
            },
            include: req.db.users,
            raw: true
        })

        console.log(session);

        if (!session) {
			throw new res.error(401, "Session isn't found");
		}

        req.session = session;

        next()
    } catch (error) {
        next(error)
        
    }
}