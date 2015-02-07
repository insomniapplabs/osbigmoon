/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var config = require('./config/environment');



// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);

// Populate DB with sample data
if(config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();

var bodyParser = require('body-parser');



// SENDING EMAIL FROM HOME PAGE VIA CONTACT API

// Setup mail for nodemailer and sendgrid
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');


app.use(bodyParser.json());
app.post('/api/contacts', function(req, res) {

	res.send(req.body);

	var options = {
		auth: {
			api_user: 'bigmooncreative', // 'SENDGRID_USERNAME' - Recommended to store as evn variables
			api_key: 'h0lein0ne', // 'SENDGRID_PASSWORD'
		}
	};
	
	var mailer = nodemailer.createTransport(sgTransport(options));

	var email = {
		to: 'aaronjohnsonis@gmail.com',
		from: req.body.email,
		subject: 'New Contact Form Submission',
		html: 'This is a message from ' + req.body.name + ', ' + req.body.email + ': ' + req.body.message 
	};
	
	mailer.sendMail(email, function(err, res) {
		if (err) {
			console.log(err)
		}
		console.log(res);
	});



});


var server = require('http').createServer(app);
var socketio = require('socket.io').listen(server);
require('./config/socketio')(socketio);
require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;