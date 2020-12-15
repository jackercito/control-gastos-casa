var mongoose = require("mongoose");
require('dotenv').config()

const USER = process.env.MONGODB_USER;
const PASSWORD = process.env.MONGODB_PASSWORD;
const SERVER = process.env.MONGO_SERVER;

//Conexion a la base de datos
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@${SERVER}`, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  if (err) console.log("Error: " + err);
});

exports.mongoose = mongoose;
