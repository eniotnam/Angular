const Customer = require('../models/customer.model.js');

// Create and Save a new customer
exports.create = (req, res) => {
    // Validate request
    if(!req.body.businessname) {
        return res.status(400).send({
            message: "customer content can not be empty"
        });
    }
    // Create a customer
    const customer = new Customer({
        businessname:req.body.businessname,
        Address:{
            street:req.body.Address.street,
            city:req.body.Address.city,
            postalcode:req.body.Address.postalcode,
        },
        Contact:{
            lastname:req.body.Contact.lastname,
            name:req.body.Contact.name,
            phone:req.body.Contact.phone,
            mail:req.body.Contact.mail,
        },
        activity:req.body.activity,

    });
    // Save customer in the database
    customer.save()
        .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the customer."
        });
    });
};

// Retrieve and return all Customer from the database.
exports.findAll = (req, res) => {

    Customer.find()
        .then(customers => {
        res.send(customers);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving customers."
        });
    });
};

// Find a single customer with a customerid
exports.findOne = (req, res) => {
    Customer.findById(req.params.id)
        .then(customer => {
        if(!customer) {
            return res.status(404).send({
                message: "customer not found with id " + req.params.id
            });
        }
        res.send(customer);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error retrieving customer with id " + req.params.id
        });
    });
};

// Update a customer identified by the customerid in the request
exports.update = (req, res) => {

    // Validate Request
    if(!req.body.businessname) {
        return res.status(400).send({
            message: "Customer content can not be empty"
        });
    }

    // Find customer and update it with the request body
    Customer.findOneAndUpdate(req.params.id, {
       businessname:req.body.businessname,
        Address:{
            street:req.body.Address.street,
            city:req.body.Address.city,
            postalcode:req.body.Address.postalcode,
        },
        Contact:{
            lastname:req.body.Contact.lastname,
            name:req.body.Contact.name,
            phone:req.body.Contact.phone,
            mail:req.body.Contact.mail,
        },
        activity:req.body.activity
    }, {new: true})
        .then(customer => {
        if(!customer) {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.id
            });
        }
        res.send(customer);
    }).catch(err => {
        if(err.kind === 'id') {
            return res.status(404).send({
                message: "customer not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating customer with id " + req.params.id
        });
    });

};

// Delete a customer with the specified customerid in the request
exports.delete = (req, res) => {
    Customer.findByIdAndRemove(req.params.id)
        .then(customer => {
        if(!customer) {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.id
            });
        }
        res.send({message: "Customer deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "customer not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete customer with id " + req.params.id
        });
    });

};
