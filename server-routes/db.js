var mongoose = require('mongoose');
var Promise = require('bluebird');
var mongo = require("mongodb").MongoClient;
module.exports = function() {

    // Set up database
    mongoose.Promise = Promise;
    var db = mongoose.connection;

    // Use either localhost or env, if in Heroku
    if (process.env.MONGOLAB_URI) {
        mongoose.connect(process.env.MONGOLAB_URI);
    } 
    else {
        mongoose.connect('mongodb://localhost/Jere');
    }

    // Catch Mongoose errors
    db.on('error', function(error) {
        console.log('Mongoose Error: ', error);
    });

    //Connect to database
    db.once('open', function() {
        console.log('Mongoose connection successful.');
    });

}
