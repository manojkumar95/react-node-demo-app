module.exports = function(app) {
    var expenses = require('../controllers/expense.controller.js');
    
    // Find all expenses
	app.get('/api/expenses', expenses.findAll);
			
	// Insert a expense in the Expense collection
    app.post('/api/expense/create', expenses.create);
}