var mongoose = require("../db/conexion.mongodb").mongoose;
var Schema = mongoose.Schema;

var ReciboSchema = new Schema({
  fecha: { type: Date, required: true },
  meses: [{ type: String }],
  tipo: { type: String, required: true }, //Luz, agua, gas, etc.
  importe: { type: Number, required: true },
  consumo: { type: Number },
  unidad: { type: String },
  nota: { type: String },
  periodo: { type: String },
  ant_post: { type: String }, // Periodo anterior o posterior
});

module.exports = mongoose.model("Recibo", ReciboSchema);
