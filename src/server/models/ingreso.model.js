var mongoose = require("../db/conexion.mongodb").mongoose;
var Schema = mongoose.Schema;

var IngresoSchema = new Schema({
  fecha: { type: Date, required: true },
  comentario: { type: String, required: true },
  importe: { type: Number, required: true },
  quien: { type: String, required: true },
});

module.exports = mongoose.model("Ingreso", IngresoSchema);
