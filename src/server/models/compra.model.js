var mongoose = require("../db/conexion.mongodb").mongoose;
var Schema = mongoose.Schema;

var CompraSchema = new Schema({
  fecha: { type: Date, required: true },
  importe: { type: Number, required: true },
  comentario: { type: String, required: true },
  quien: { type: String, required: true },
  igualarACero: { type: Boolean, required: true },
});

module.exports = mongoose.model("Compra", CompraSchema);
