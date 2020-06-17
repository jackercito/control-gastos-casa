var ReciboModel = require("../models/recibo.model")

// Saving the context of this module inside the _the variable
_this = this;

exports.getOneRecibo = async (id) => {
  try {
    var recibo = await ReciboModel.findById(id)
    return recibo;
  } catch (e) {
    throw Error('Error al buscar el registro seleccionado. Err: ' + e);
  }
}

exports.getRecibo = async (query) => {
  try {
    var recibo = await ReciboModel.find(query)
    return recibo;
  } catch (e) {
    throw Error('Error al buscar el registro seleccionado. Err: ' + e);
  }
}

exports.createRecibo = async (recibo) => {
  var nuevoRecibo = new ReciboModel({
    fecha: recibo.fecha,
    meses: recibo.meses,
    tipo: recibo.tipo,
    importe: recibo.importe,
    consumo: recibo.consumo,
    unidad: recibo.unidad,
    nota: recibo.nota,
    periodo: recibo.periodo,
    ant_post: recibo.ant_post,
  })

  try {
    var savedRecibo = await nuevoRecibo.save()
    return savedRecibo;
  } catch (e) {
    // return a Error message describing the reason     
    throw Error("Error al crear el registro. Err.: " + e)
  }
}

exports.updateRecibo = async (recibo) => {
  var id = recibo.id
  try {
    var oldRecibo = await ReciboModel.findById(id);
  } catch (e) {
    throw Error("Ocurrio un error al buscar el registro")
  }

  // If no old Todo Object exists return false
  if (!oldRecibo) {
    return false;
  }

  oldRecibo.fecha = recibo.fecha;
  oldRecibo.meses = recibo.meses;
  oldRecibo.tipo = recibo.tipo;
  oldRecibo.importe = recibo.importe;
  oldRecibo.consumo = recibo.consumo;
  oldRecibo.unidad = recibo.unidad;
  oldRecibo.nota = recibo.nota;
  oldRecibo.periodo = recibo.periodo;
  oldRecibo.ant_post = recibo.ant_post;

  try {
    var savedRegistro = await oldRecibo.save()
    return savedRegistro;
  } catch (e) {
    // return a Error message describing the reason
    console.log(e);
    throw Error("Error al actualizar el registro: " + e)
  }
}

exports.deleteRecibo = async (id) => {
  try {
    var deletedRecibo = await ReciboModel.findByIdAndDelete(id);
    return deletedRecibo;
  } catch (err) {
    throw Error("Error al eliminar el resitro. Error: " + err)
  }
}
