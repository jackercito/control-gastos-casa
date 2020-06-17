var CompraService = require("../services/compra.service")

// Saving the context of this module inside the _the variable
_this = this;

exports.getOneCompra = async (req, res, next) => {
  var id = req.params.id;
  try {
    var compra = await CompraService.getOneCompra(id)
    res.json(compra)
  } catch (e) {
    throw Error('Error al buscar el registro seleccionado. Err: ' + e);
  }
}

exports.getCompras = async (req, res, next) => {
  var query = {};
  try {
    var compra = await CompraService.getCompras(query)
    res.json(compra)
  } catch (e) {
    throw Error('Error al buscar los registros seleccionado. Err: ' + e);
  }
}

exports.createCompra = async (req, res, next) => {
  var compra = ({
    importe: req.body.importe,
    fecha: req.body.fecha,
    comentario: req.body.comentario,
    quien: req.body.quien,
    igualarACero: req.body.igualarACero,
  })

  try {
    var createCompra = await CompraService.createCompra(compra)
    res.json(createCompra);
  } catch (e) {
    // return a Error message describing the reason     
    throw Error("Error al crear el registroa. Err.: " + e)
  }
}

exports.updateCompra = async (req, res, next) => {
  if (!req.params.id) {
    return res.status(400).json({ status: 400., message: "Id must be present" })
  }
  var id = req.params.id;

  var compra = ({
    id,
    importe: req.body.importe,
    fecha: req.body.fecha,
    comentario: req.body.comentario,
    quien: req.body.quien,
    igualarACero: req.body.igualarACero,
  })

  try {
    // Calling the Service function with the new object from the Request Body
    var updateCompra = await CompraService.updateCompra(compra)
    res.json(updateCompra);
  } catch (e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({ status: 400, message: "Error al actualizar el registro. Error: " + e })
  }
}

exports.deleteCompra = async (req, res, next) => {
  var id = req.params.id;
  try {
    var compra = await CompraService.deleteCompra(id);
    res.json(compra)
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: 400, message: "Error al eliminar el registro. Error: " + e })
  }
}
