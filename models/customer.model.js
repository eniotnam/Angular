const mongoose = require('mongoose');


// CUSTOMERS SCHEMA
const CustomerSchema = mongoose.Schema({

    businessname:String,
    Address:{
        street:String,
        city:String,
        postalcode:String,
    },
    Contact:{
        lastname:String,
        name:String,
        phone:String,
        mail:String,
    },
    activity:String,

}, {
    timestamps: true
});
module.exports = mongoose.model('Customer', CustomerSchema);

