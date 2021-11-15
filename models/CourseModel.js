module.exports = async (sequelize, Sequelize) => {
	return await sequelize.define("courses", {
        course_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
        course_title: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        course_description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        course_photo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        course_price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        course_length: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
	});
};