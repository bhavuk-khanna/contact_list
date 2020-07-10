//require the library
const mongoose = require('mongoose');

//conect to the database
mongoose.connect('mongodb://localhost/contact_list_2_db');


//aquire the connection (to check if it is successful)
const db  = mongoose.connection;

//error if unsuccessful
db.on('error', console.error.bind(console, 'error connecting to db'));

//up and running the print the message to console
db.once('open', function(){
    console.log('Successfully connected to the database');
});