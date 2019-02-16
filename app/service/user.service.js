const User = require('../models/user.js');

// Find the category by a CategoryId
exports.findByUserId = (_id, callback) => {
  User.findById({ _id })
    .exec(function (err, user) {
      if (err) {
        return callback(err, null);
      }
      return callback(null, user);
    });
};