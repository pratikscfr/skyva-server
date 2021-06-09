require('dotenv').config();
const app = require('./app');
const http = require('http');
const mongoose = require('mongoose');
const constants = require('./utils/constants');

//const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@skyva.rgjb3.mongodb.net/userData?retryWrites=true&w=majority`;
const uri = 'mongodb://localhost:27017/Ecell';
const server = http.createServer(app);
const port = process.env.PORT || constants.PORT_NUMBER;

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then((res) => {
		console.log('Connected to database, Server Starting');
		server.listen(port, () => {
			console.log(`Listening at PORT:${port}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
