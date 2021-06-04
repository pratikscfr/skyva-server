require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const constants = require('./utils/constants');

const app = express();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@skyva.rgjb3.mongodb.net/userData?retryWrites=true&w=majority`;

try {
  mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log('Mongoose Connected');
    }
  );
} catch (e) {
  console.log('Mongoose could not connect, Error: ' + e);
}

const db = mongoose.connection;

db.on('open', () => {
  console.log('Connected to Database');
});

db.on('error', () => {
  console.log('Error Connecting to MongoDb Database');
});

app.listen(constants.PORT_NUMBER, () => {
  console.log(`Running on port ${constants.PORT_NUMBER}`);
});
