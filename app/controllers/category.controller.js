const Category = require('../models/category.js');

exports.findAll = (req, res) => {
	Category.find()
    .then(categories => {
        res.send(categories);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

exports.create = (req, res) => {
	Category.create(req.body)
    .then(categories => {
        res.send(categories);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};