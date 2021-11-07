const express = require('express');
const app = express();
const testRouter = require('./routes/testRouter');
const usersRouter = require('./routes/usersRouter');
const path = require('path')
const RateLimit = require('express-rate-limit');

// set up rate limiter: maximum of five requests per minute
const limiter = new RateLimit({
	windowMs: 60 * 1000, // 1 minute
	max: 5
});

// global middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(limiter); // apply rate limiter to all requests

app.use('/api/', testRouter); // Handles GET requests to /api, sends back "API is running"
app.use('/api/users', usersRouter); // Handles GET request to /api/users, sends back everything in the DB users table

// Serve static assets if in production.
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	});
}

module.exports = app;