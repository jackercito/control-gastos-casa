var mongoose = require("mongoose");
require('dotenv').config()

const USER = process.env.MONGODB_USER;
const PASSWORD = process.env.MONGODB_PASSWORD;
const DB = process.env.MONGO_DB;
const SERVER = process.env.MONGO_SERVER;
const PORT = process.env.MONGO_PORT;

//Conexion a la base de datos
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@${SERVER}`, { useNewUrlParser: true, useUnifiedTopology: true });

exports.mongoose = mongoose;
