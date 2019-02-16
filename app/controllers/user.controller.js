const User = require('../models/user.js');

exports.findAll = (req, res) => {
	User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

exports.create = (req, res) => {
	User.create(req.body)
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};