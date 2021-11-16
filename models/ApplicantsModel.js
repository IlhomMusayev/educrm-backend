module.exports = async (sequelize, Sequelize) => {
	return await sequelize.define("applicants", {
        applicant_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
        applicant_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        applicant_age: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        applicant_gender: {
            type: Sequelize.ENUM,
            values: ["male", "famle"],
            allowNull: false,
        },
        applicant_source: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        applicant_phone: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        applicant_description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        applicant_course: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        applicant_status: {
            type: Sequelize.ENUM,
            values: ["active", "waiting", "canceled"],
            allowNull: false,
        },
	});
};