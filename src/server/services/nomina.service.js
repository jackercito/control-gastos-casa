var NominaModel = require("../models/nomina.model")

// Saving the context of this module inside the _the variable
_this = this;

exports.getOneNomina = async (id) => {
  try {
    var nomina = await NominaModel.findById(id)
    return nomina;
  } catch (e) {
    throw Error('Error al buscar el registro seleccionado. Err: ' + e);
  }
}

exports.getNominas = async (query) => {
  try {
    var nominas = await NominaModel.find(query)
    return nominas;
  } catch (e) {
    throw Error('Error al buscar el registro seleccionado. Err: ' + e);
  }
}

exports.createNomina = async (nomina) => {
  var nuevaNomina = new NominaModel({
    fecha: nomina.fecha,
    ingresado: nomina.ingresado,
    sacado: nomina.sacado,
    comentario: nomina.comentario,
    quien: nomina.quien,
    mes: nomina.mes,
  })

  try {
    var savedNomina = await nuevaNomina.save()
    return savedNomina;
  } catch (e) {
    // return a Error message describing the reason     
    throw Error("Error al crear el registroa. Err.: " + e)
  }
}

exports.updateNomina = async (nomina) => {
  var id = nomina.id
  try {
    var oldNomina = await NominaModel.findById(id);
  } catch (e) {
    throw Error("Ocurrio un error al buscar el registro")
  }

  // If no old Todo Object exists return false
  if (!oldNomina) {
    return false;
  }

  oldNomina.fecha = nomina.fecha;
  oldNomina.ingresado = nomina.ingresado;
  oldNomina.sacado = nomina.sacado;
  oldNomina.comentario = nomina.comentario;
  oldNomina.quien = nomina.quien;
  oldNomina.mes = nomina.mes;

  try {
    var savedRegistro = await oldNomina.save()
    return savedRegistro;
  } catch (e) {
    // return a Error message describing the reason
    console.log(e);
    throw Error("Error al actualizar el registro: " + e)
  }
}

exports.deleteNomina = async (id) => {
  try {
    var deletedNomina = await NominaModel.findByIdAndDelete(id);
    return deletedNomina;
  } catch (err) {
    throw Error("Error al eliminar el resitro. Error: " + err)
  }
}
