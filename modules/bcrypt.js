const bcrypt = require('bcrypt');

module.exports = async function generateHash(password) {
    let salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

module.exports = async function compareHash(password, hash) {
    return bcrypt.compareSync(password, hash)
}