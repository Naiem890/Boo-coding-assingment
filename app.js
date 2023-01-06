'use strict';

const express = require('express');
const app = express();
const port =  process.env.PORT || 5000;

// Calling the express.json() method for parsing
app.use(express.urlencoded({ extended: true }));

// set the public folder to all static assets
app.use(express.static('public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// routes
app.use('/comments', require('./routes/comments')());
app.use('/', require('./routes/profile')());



// start server
const server = app.listen(port);
console.log('Express started. Listening on %s', port);
