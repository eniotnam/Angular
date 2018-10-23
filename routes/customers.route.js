module.exports = (app) => {
    const customer = require('../controllers/customer.controller.js');

    // Create a new customer
    app.post('/customers', customer.create);

    // Retrieve all customers
    app.get('/customers', customer.findAll);
    app.get('/', customer.findAll);

    // Retrieve a single customer with noteId
    app.get('/customers/:id', customer.findOne);

    // Update a customer with customerid
    app.put('/customers/:id', customer.update);

    // Delete a customer with customerid
    app.delete('/customers/:id', customer.delete);
}
