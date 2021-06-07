require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");
const constants = require("./utils/constants");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@skyva.rgjb3.mongodb.net/userData?retryWrites=true&w=majority`;
//const uri = "mongodb://localhost:27017/first_db";
const http = require("http");
const server = http.createServer(app);

const port = constants.PORT_NUMBER || 3000;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("connected to database server starting");
    server.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
