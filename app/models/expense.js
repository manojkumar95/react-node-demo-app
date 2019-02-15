const mongoose = require('mongoose');

const ExpenseSchema = mongoose.Schema({
    title: String,
    cost: String,
    description: String,
    notes: String,
    categories : [{ type: Schema.Types.ObjectId, ref: 'Category' }]
});

module.exports = mongoose.model('Expense', ExpenseSchema);