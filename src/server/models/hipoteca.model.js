var mongoose = require("../db/conexion.mongodb").mongoose;
var Schema = mongoose.Schema;

var HipotecaSchema = new Schema({
  fecha: { type: Date, required: true },
  modo: { type: String, required: true }, //Automatico o manual
  tipo: { type: String, required: true }, //Mensualidad o amortizacion
  amortizacion: { type: String }, //En la mensualidad o en el tiempo
  importe: { type: Number, required: true },
  importe_capital: { type: Number },
  importe_intereses: { type: Number },
  interes: { type: Number, required: true }, //1.4
  persona: { type: String, required: true },
});

module.exports = mongoose.model("Hipoteca", HipotecaSchema);
