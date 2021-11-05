const bcrypt = require('bcrypt');

module.exports.generateHash = function (password) {
    let salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

module.exports.compareHash = function (password, hash) {
    return bcrypt.compareSync(password, hash)
}