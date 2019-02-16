const Expense = require('../models/expense.js');
const UserService = require('../service/user.service.js');

exports.findAll = (req, res) => {
	Expense.find()
    .then(expenses => {
        expenses.map(expense => {
          expense.user = UserService.findByUserId(expense.user);
        });
        res.send(expenses);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

exports.create = (req, res) => {
	Expense.create(req.body)
    .then(expenses => {
        res.send(expenses);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};