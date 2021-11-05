const {
	SignInValidation,
	SignUpValidation
} = require("../modules/validations");
const {
	createToken
} = require("../modules/jwt")

const {
	generateHash
} = require("../modules/bcrypt")

module.exports = class UserController {
	static async SignInController(req, res, next) {
		try {
			const {
				username,
				password
			} = await SignInValidation(req.body, res.error)

			const user = await req.db.users.findOne({
				where: {
					user_username: username,
				},
				raw: true,
			});
			console.log(user);

			// if (!user) throw new Error(500, 'User not found')

			// if (!await generateHash(password).then(hash => hash === user.user_password)) throw new Error(500, 'Password not match')

			// const token = await createToken(user.user_id)

			// res.status(200).json({
			// 	ok: true,
			// 	message: "User signed in successfully",
			// 	data: {
			// 		token,
			// 		user,
			// 	},
			// })

		} catch (error) {
			if (error.message == "Validation error") {
				res.status(503).json({
					ok: false,
					message: "User oldindan mavjud",
				})
				return;
			}
			console.log(error);
			next(error)
		}

		try {
			const {
				username,
				password
			} = await SignInValidation(req.body, res.error);

			const user = await req.db.users.findOne({
				where: {
					user_username: username,
				},
				raw: true,
			});

			if (!user) throw new res.error(400, "User not found");

			await req.db.sessions.destroy({
				where: {
					session_useragent: req.headers["user-agent"] || "Unknown",
					user_id: user.user_id,
				},
			});

			const session = await req.db.sessions.create({
				session_useragent: req.headers["user-agent"] || "Unknown",
				user_id: user.user_id,
			});

			const token = await createToken({
				session_id: session.dataValues.session_id,
			});


			res.status(201).json({
				ok: true,
				message: "Token created successfully",
				data: {
					token,
				},
			});

		} catch (error) {
			next(error)
		}
	}

	static async SignUpController(req, res, next) {
		try {
			const {
				name,
				username,
				password,
				gender
			} = await SignUpValidation(req.body, res.error)


			const user = await req.db.users.create({
				user_name: name,
				user_username: username,
				user_password: await generateHash(password),
				user_gender: gender,
			})

			if (!user) throw new Error(500, 'User not created')

			res.status(200).json({
				ok: true,
				message: "User created successfully",
			})

		} catch (error) {
			if (error.message == "Validation error") {
				res.status(503).json({
					ok: false,
					message: "User oldindan mavjud",
				})
				return;
			}
			console.log(error);
			next(error)
		}
	}

	static async UserGetController(req, res, next) {
		try {
			const page = req.query.page ? req.query.page - 1 : 0;
			const limit = req.query.limit || 15;
			const order = req.query.order == "DESC" ? "DESC" : "ASC";

			console.log(req.query);
			const users = await req.db.users.findAll({
				attributes: [
					"user_id",
					"user_name",
					"user_username",
					"user_gender",
				],
				raw: true,
				limit: limit,
				offset: page * 15,
				order: [
					["createdAt", order]
				],
			});
			console.log(users);
			res.status(200).json({
				ok: true,
				message: "Users list",
				data: {
					users,
				},
			});

		} catch (error) {
			next(error)
		}
	}
}