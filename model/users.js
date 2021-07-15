var mongoose = require("mongoose");

var UsersSchema = new mongoose.Schema(
	{
		full_name: { type: String, required: true, max: 100 },
		account_num: { type: Number, required: true, max: 999999 },
		balance: { type: Number, min: 1 },
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("User", UsersSchema);
