var HipotecaModel = require("../models/hipoteca.model")

// Saving the context of this module inside the _the variable
_this = this;

exports.getOneHipoteca = async (id) => {
  try {
    var hipoteca = await HipotecaModel.findById(id)
    return hipoteca;
  } catch (e) {
    throw Error('Error al buscar el registro seleccionado. Err: ' + e);
  }
}

exports.getHipotecas = async (query) => {
  try {
    var hipoteca = await HipotecaModel.find(query)
    return hipoteca;
  } catch (e) {
    throw Error('Error al buscar el registro seleccionado. Err: ' + e);
  }
}

exports.createHipoteca = async (hipoteca) => {
  var nuevaHipoteca = new HipotecaModel({
    fecha: hipoteca.fecha,
    modo: hipoteca.modo,
    tipo: hipoteca.tipo,
    amortizacion: hipoteca.amortizacion,
    importe: hipoteca.importe,
    importe_capital: hipoteca.importe_capital,
    importe_intereses: hipoteca.importe_intereses,
    interes: hipoteca.interes,
    persona: hipoteca.persona,
  })

  try {
    var savedHipoteca = await nuevaHipoteca.save()
    return savedHipoteca;
  } catch (e) {
    // return a Error message describing the reason     
    throw Error("Error al crear el registroa. Err.: " + e)
  }
}

exports.updateHipoteca = async (hipoteca) => {
  var id = hipoteca.id
  try {
    var oldHipoteca = await HipotecaModel.findById(id);
  } catch (e) {
    throw Error("Ocurrio un error al buscar el registro")
  }

  // If no old Todo Object exists return false
  if (!oldHipoteca) {
    return false;
  }

  oldHipoteca.fecha = hipoteca.fecha;
  oldHipoteca.modo = hipoteca.modo;
  oldHipoteca.tipo = hipoteca.tipo;
  oldHipoteca.amortizacion = hipoteca.amortizacion;
  oldHipoteca.importe = hipoteca.importe;
  oldHipoteca.importe_capital = hipoteca.importe_capital;
  oldHipoteca.importe_intereses = hipoteca.importe_intereses;
  oldHipoteca.interes = hipoteca.interes;
  oldHipoteca.persona = hipoteca.persona;

  try {
    var savedRegistro = await oldHipoteca.save()
    return savedRegistro;
  } catch (e) {
    // return a Error message describing the reason
    console.log(e);
    throw Error("Error al actualizar el registro: " + e)
  }
}

exports.deleteHipoteca = async (id) => {
  try {
    var deletedHipoteca = await HipotecaModel.findByIdAndDelete(id);
    return deletedHipoteca;
  } catch (err) {
    throw Error("Error al eliminar el resitro. Error: " + err)
  }
}
