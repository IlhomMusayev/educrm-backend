const jwt = require('jsonwebtoken')

module.exports = class JWT{
    static async createToken(user) {
        return jwt.sign(user, process.env.JWT_SECRET, {
            expiresIn: '1d'
        })
    }  
    static async verifyToken(token) {
        return jwt.verify(token, process.env.JWT_SECRET)
    }
}