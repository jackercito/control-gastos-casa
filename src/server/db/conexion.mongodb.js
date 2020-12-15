var mongoose = require("mongoose");
require('dotenv').config()

const USER = process.env.MONGODB_USER;
const PASSWORD = process.env.MONGODB_PASSWORD;
const SERVER = process.env.MONGO_SERVER;

console.log(`mongodb+srv://${USER}:${PASSWORD}@${SERVER}`);

//Conexion a la base de datos
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@${SERVER}`, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000 }, async (err, db) => {
  if (err) console.log("Error: " + err);

  var h = require("../services/hipoteca.service")
  var hs = await h.getHipotecas({})
  console.log(hs);

});

exports.mongoose = mongoose;
