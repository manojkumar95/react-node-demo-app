const mongoose = require('mongoose'), Schema = mongoose.Schema;

const UserSchema = Schema({
    name: String,
    company: String,
    employeeId: String,
	expenses : [{ type: Schema.Types.ObjectId, ref: 'Expense' }]
});

module.exports = mongoose.model('User', UserSchema);