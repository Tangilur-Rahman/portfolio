const mongoose = require("mongoose");
const validator = require("validator");

mongoose
	.connect(process.env.DATABASE_URL)
	.then(() => console.log("database connection successfully"))
	.catch((error) => console.log(error.message));

const scheme = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error("Invalid Email");
			}
		}
	},
	message: {
		type: String,
		default: "no message"
	}
});

const model = mongoose.model("from_portfolio", scheme);

module.exports = model;
