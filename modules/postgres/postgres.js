const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('../../models/UserModel');
const init = require('./init');
const relations = require('./relations');
const SessionsModel = require('../../models/SessionModel');
const PermissionModel = require('../../models/PermissionModel')
const UserPermissionModel = require('../../models/UserPermissionModel')
const TeachersModel = require('../../models/TeachersModel')

// create the database connection
const sequelize = new Sequelize('postgres://postgres:qwerty@localhost:5432/educrm', {
    logging: true,
});    

module.exports = async function postgres() {
	try {
		await sequelize.authenticate();

		let db = {};

		db.users = await UserModel(sequelize, Sequelize);
		db.sessions = await SessionsModel(sequelize, Sequelize)	
		db.permissions = await PermissionModel(sequelize, Sequelize)
		db.user_permissions = await UserPermissionModel(sequelize, Sequelize)
		db.teachers = await TeachersModel(sequelize, Sequelize)

		
		await relations(db)
		
		await init(db);

		await sequelize.sync({ force: false });

		return db;
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};
