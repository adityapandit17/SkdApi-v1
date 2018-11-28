const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

const UserSchema = new Schema({
		firstName: {
			type: String,
		},
		lastName: {
			type: String
		},
		gender: {
			type: String
		},
		mobileNumber: {
			type: Number
		},
		email: {
			type: String,
			required: "Kindly Enter email"
		},
		password: {
			type: String,
			required: "Enter the password"
		}
});

module.exports = mongoose.model('Users', UserSchema);