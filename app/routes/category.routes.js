module.exports = function(app) {
    var categories = require('../controllers/category.controller.js');
    
    // Find all categories
	app.get('/api/categories', categories.findAll);
			
	// Insert a category in the Category collection
    app.post('/api/category/create', categories.create);
}