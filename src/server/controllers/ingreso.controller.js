var IngresoService = require("../services/ingreso.service")

// Saving the context of this module inside the _the variable
_this = this;

exports.getOneIngreso = async (req, res, next) => {
  var id = req.params.id;
  try {
    var ingreso = await IngresoService.getOneIngreso(id)
    res.json(ingreso)
  } catch (e) {
    throw Error('Error al buscar el registro seleccionado. Err: ' + e);
  }
}

exports.getIngresos = async (req, res, next) => {
  var query = {};
  try {
    var ingresos = await IngresoService.getIngresos(query)
    res.json(ingresos)
  } catch (e) {
    throw Error('Error al buscar los registros seleccionado. Err: ' + e);
  }
}

exports.createIngreso = async (req, res, next) => {
  var ingreso = ({
    fecha: req.body.fecha,
    comentario: req.body.comentario,
    importe: req.body.importe,
    quien: req.body.quien,
  })

  try {
    var createIngreso = await IngresoService.createIngreso(ingreso)
    res.json(createIngreso);
  } catch (e) {
    // return a Error message describing the reason     
    throw Error("Error al crear el registroa. Err.: " + e)
  }
}

exports.updateIngreso = async (req, res, next) => {
  if (!req.params.id) {
    return res.status(400).json({ status: 400., message: "Id must be present" })
  }
  var id = req.params.id;

  var ingreso = ({
    id,
    fecha: req.body.fecha,
    comentario: req.body.comentario,
    importe: req.body.importe,
    quien: req.body.quien,
  })

  try {
    // Calling the Service function with the new object from the Request Body
    var updateIngreso = await IngresoService.updateIngreso(ingreso)
    res.json(updateIngreso);
  } catch (e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({ status: 400, message: "Error al actualizar el registro. Error: " + e })
  }
}

exports.deleteIngreso = async (req, res, next) => {
  var id = req.params.id;
  try {
    var ingreso = await IngresoService.deleteIngreso(id);
    res.json(ingreso)
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: 400, message: "Error al eliminar el registro. Error: " + e })
  }
}
