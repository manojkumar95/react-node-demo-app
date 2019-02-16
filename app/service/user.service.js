const User = require('../models/user.js');

// Find the category by a CategoryId
exports.findByUserId = (_id) => {
    User.find({ _id })
	.exec(function (err, user) {
		if (err){
      return;
		}					
		return user;
	});
};