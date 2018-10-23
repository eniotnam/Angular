const mongoose = require('mongoose');


// USER/EMPLOYEE SCHEMA
const UserSchema = mongoose.Schema({


    lastname:String,
    firstname:String,
    username:String,
    birthday:String,
    Address:{
        street:String,
        city:String,
        codepostal:String,
    },
    telephone:String,
    mail:String,
    post:String,


}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);




