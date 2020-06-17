var CompraModel = require("../models/compra.model")

// Saving the context of this module inside the _the variable
_this = this;

exports.getOneCompra = async (id) => {
  try {
    var compra = await CompraModel.findById(id)
    return compra;
  } catch (e) {
    throw Error('Error al buscar el registro seleccionado. Err: ' + e);
  }
}

exports.getCompras = async (query) => {
  try {
    var compras = await CompraModel.find(query)
    return compras;
  } catch (e) {
    throw Error('Error al buscar el registro seleccionado. Err: ' + e);
  }
}

exports.createCompra = async (compra) => {
  var nuevaCompra = new CompraModel({
    importe: compra.importe,
    fecha: compra.fecha,
    comentario: compra.comentario,
    quien: compra.quien,
    igualarACero: compra.igualarACero,
  })

  try {
    var savedCompra = await nuevaCompra.save()
    return savedCompra;
  } catch (e) {
    // return a Error message describing the reason     
    throw Error("Error al crear el registroa. Err.: " + e)
  }
}

exports.updateCompra = async (compra) => {
  var id = compra.id
  try {
    var oldCompra = await CompraModel.findById(id);
  } catch (e) {
    throw Error("Ocurrio un error al buscar el registro")
  }

  // If no old Todo Object exists return false
  if (!oldCompra) {
    return false;
  }

  oldCompra.fecha = compra.fecha;
  oldCompra.importe = compra.importe;
  oldCompra.comentario = compra.comentario;
  oldCompra.quien = compra.quien;
  oldCompra.igualarACero = compra.igualarACero;

  try {
    var savedRegistro = await oldCompra.save()
    return savedRegistro;
  } catch (e) {
    // return a Error message describing the reason
    console.log(e);
    throw Error("Error al actualizar el registro: " + e)
  }
}

exports.deleteCompra = async (id) => {
  try {
    var deletedCompra = await CompraModel.findByIdAndDelete(id);
    return deletedCompra;
  } catch (err) {
    throw Error("Error al eliminar el resitro. Error: " + err)
  }
}
