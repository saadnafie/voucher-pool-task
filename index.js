const express = require('express');
//const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// setup express app
const app = express();

const dbURI = 'mongodb+srv://admin:KhEKMJaTipVC9dgT@nodetest.dun0qa6.mongodb.net/voucher-pool?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
	.then((result) => {
		console.log('connected to db');
	})
	.catch((err) => console.log(err));

app.use(express.static('public'));

app.use(bodyParser.json());


// initiallize routes call and use routes, also add prefix 'api'
//app.use('/api', routes);
app.use('/api', require('./routes/api'));

//error handling middleware
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});


//error handling middleware
app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.send({
		error:{
			status_code: err.status || 500,
			error: err.message
		}
	});
});

// listen for requests
app.listen(process.env.port || 5000, function(){
	console.log("now listening for requests on port 5000");
});