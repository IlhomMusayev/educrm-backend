import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;


// create the database connection
const sequelize = new Sequelize('postgres://postgres:qwerty@localhost:5432/educrm', {
    logging: false,
});    

export default async function postgres() {
    try {
        await sequelize.authenticate();

        let db = {};


        await sequelize.sync({ force: false });
		return db;

    } catch (error) {
        console.log("DATABASE ERROR: " + error);
    }
}