const Expense = require('../models/expense.js');
const UserService = require('../service/user.service.js');
const Moment = require('moment');

exports.findAll = (req, res) => {
  const { findByUserId } = UserService;
  Expense.find()
    .then(async expenses => {
      await Promise.all(expenses.map(async (expense, index) => {
        await new Promise((resolve, reject) => {
          findByUserId(expense.user, (err, user) => {
            if (user) {
              expenses[index].user = user;
              resolve(expenses);
            }
            reject();
          })
        });
      })
      );
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

exports.findExpenseByPeriodRange = (req, res) => {
  const { startDate } = req.body;
  let endDate = '';
  let query = '';
  if (req.body.period === 'Monthly') {
    endDate = Moment(a).add(30, 'days').toDate();
    query = { createdAt: { $gte: startDate, $lte: endDate } };
  } else if (req.body.period === 'Weekly') {
    endDate = Moment(a).add(7, 'days').toDate();
    query = { createdAt: { $gte: startDate, $lte: endDate } };
  } else if (req.body.period === 'Daily') {
    endDate = startDate;
    query = { createdAt: { $gte: startDate, $lte: endDate } };
  }
  Expense.find(query)
    .then(expenses => {
      expenses.map(expense => {
        findByUserId(expense.user, (err, user) => {
          if (user) {
            expense.user = user;
          }
        });
      });
      res.send(expenses);
    }).catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};