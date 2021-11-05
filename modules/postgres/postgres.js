const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('../../models/UserModel');
const init = require('./init');
const relations = require('./relations');
const SessionsModel = require('../../models/SessionModel');

// create the database connection
const sequelize = new Sequelize('postgres://postgres:qwerty@localhost:5432/educrm', {
    logging: false,
});    

module.exports = async function postgres() {
	try {
		await sequelize.authenticate();

		let db = {};

		db.users = await UserModel(sequelize, Sequelize);
		db.sessions = await SessionsModel(sequelize, Sequelize)

		await relations(db)
		
		await init(db);

		// await sequelize.sync({ force: true });

		return db;
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};
