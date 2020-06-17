var IngresoModel = require("../models/ingreso.model")

// Saving the context of this module inside the _the variable
_this = this;

exports.getOneIngreso = async (id) => {
  try {
    var ingreso = await IngresoModel.findById(id)
    return ingreso;
  } catch (e) {
    throw Error('Error al buscar el registro seleccionado. Err: ' + e);
  }
}

exports.getIngresos = async (query) => {
  try {
    var ingresos = await IngresoModel.find(query)
    return ingresos;
  } catch (e) {
    throw Error('Error al buscar el registro seleccionado. Err: ' + e);
  }
}

exports.createIngreso = async (ingreso) => {
  var nuevoIngreso = new IngresoModel({
    fecha: ingreso.fecha,
    importe: ingreso.importe,
    comentario: ingreso.comentario,
    quien: ingreso.quien,
  })

  try {
    var savedIngreso = await nuevoIngreso.save()
    return savedIngreso;
  } catch (e) {
    // return a Error message describing the reason     
    throw Error("Error al crear el registroa. Err.: " + e)
  }
}

exports.updateIngreso = async (ingreso) => {
  var id = ingreso.id
  try {
    var oldIngreso = await IngresoModel.findById(id);
  } catch (e) {
    throw Error("Ocurrio un error al buscar el registro")
  }

  // If no old Todo Object exists return false
  if (!oldIngreso) {
    return false;
  }

  oldIngreso.fecha = ingreso.fecha;
  oldIngreso.importe = ingreso.importe;
  oldIngreso.comentario = ingreso.comentario;
  oldIngreso.quien = ingreso.quien;

  try {
    var savedRegistro = await oldIngreso.save()
    return savedRegistro;
  } catch (e) {
    // return a Error message describing the reason
    console.log(e);
    throw Error("Error al actualizar el registro: " + e)
  }
}

exports.deleteIngreso = async (id) => {
  try {
    var deletedIngreso = await IngresoModel.findByIdAndDelete(id);
    return deletedIngreso;
  } catch (err) {
    throw Error("Error al eliminar el resitro. Error: " + err)
  }
}
