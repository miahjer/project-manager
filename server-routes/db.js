var mongoose = require('mongoose');
var Promise = require('bluebird');
let URI = 'mongodb://heroku_pnx7klxl:88t00tqvo5a648kpjab45rkv8d@ds019886.mlab.com:19886/heroku_pnx7klxl';
module.exports = function() {

    // Set up database
    mongoose.Promise = Promise;
    var db = mongoose.connection;

    // Use either localhost or env, if in Heroku
    if (URI) {
        mongoose.connect(URI);
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
