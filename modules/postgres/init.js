module.exports = async function init(db) {
	const count = await db.users.count();

	if (count === 0) {
		const admin = await db.users.create({
			user_username: "Ilhomjon",
			user_password: "qwerty",
			user_gender: "male",
			user_name: "Ilhomjon",
		});

	}
}