module.exports = function(app) {
    var users = require('../controllers/user.controller.js');
    
    // Find all users
	app.get('/api/users', users.findAll);
			
	// Insert a user in the User collection
    app.post('/api/user/create', users.create);
}