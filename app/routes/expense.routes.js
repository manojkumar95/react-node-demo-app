module.exports = function (app) {
  var expenses = require('../controllers/expense.controller.js');

  // Find all expenses
  app.get('/api/expenses', expenses.findAll);

  // Find expenses by range period (daily, weekly or monthly)
  app.post('/api/expenses/filterbyrange', expenses.findExpenseByPeriodRange);

  // Insert a expense in the Expense collection
  app.post('/api/expense/create', expenses.create);
}