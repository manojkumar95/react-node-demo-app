const mongoose = require('mongoose'), Schema = mongoose.Schema;

const UserSchema = Schema({
    name: { type:String, required: true },
    company: String,
    employeeId: String
});

module.exports = mongoose.model('User', UserSchema);