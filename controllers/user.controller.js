const User = require('../models/user.model.js');

// Create and Save a new user
exports.create = (req, res) => {
    // Validate request
    if(!req.body.lastname) {
        return res.status(400).send({
            message: "user content can not be empty"
        });
    }
    // Create a user
    const user = new User({
        lastname: req.body.lastname || "Untitled User",
        firstname: req.body.firstname || "Untitled User",
        username: req.body.username,
        birthday: req.body.birthday,
        Address:{ 
            street:req.body.Address.street,
            city:req.body.Address.city,
            codepostal:req.body.Address.codepostal,
        } ,
        telephone: req.body.telephone,
        mail: req.body.mail,
        post: req.body.post

    });
    // Save user in the database
    user.save()
        .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the user."
        });
    });
};

// Retrieve and return all User from the database.
exports.findAll = (req, res) => {

    User.find()
        .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

// Find a single user with a userid
exports.findOne = (req, res) => {
    User.findById(req.params.id)
        .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.id
        });
    });
};

// Update a user identified by the userid in the request
exports.update = (req, res) => {

    // Validate Request
    if(!req.body.lastname) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }

    // Find user and update it with the request body
    User.findOneAndUpdate(req.params.id, {
        lastname: req.body.lastname ,
        firstname: req.body.firstname ,
        username: req.body.username,
        birthday: req.body.birthday,
        Address:{ 
            street:req.body.Address.street,
            city:req.body.Address.city,
            codepostal:req.body.Address.codepostal,
        } ,
        telephone: req.body.telephone,
        mail: req.body.mail,
        post: req.body.post
    }, {new: true})
        .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'id') {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.id
        });
    });

};

// Delete a user with the specified userid in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.id
        });
    });

};
