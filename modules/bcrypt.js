import bcrypt from 'bcrypt';

export default class Crypto {
    static async generateHash(password) {
        let salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }

    static async compareHash(password, hash) {
        return bcrypt.compareSync(password, hash)
    }
}