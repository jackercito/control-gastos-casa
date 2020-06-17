var mongoose = require("../db/conexion.mongodb").mongoose;
var Schema = mongoose.Schema;

var NominaSchema = new Schema({
  fecha: { type: Date, required: true },
  mes: { type: String, required: true },
  ingresado: { type: Number, required: true },
  sacado: { type: Number, required: true },
  comentario: { type: String },
  quien: { type: String, required: true },
});

module.exports = mongoose.model("Nomina", NominaSchema);
