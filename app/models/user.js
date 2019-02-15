const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    company: String,
    employeeId: String,
	expenses : [{ type: Schema.Types.ObjectId, ref: 'Expense' }]
});

module.exports = mongoose.model('User', UserSchema);