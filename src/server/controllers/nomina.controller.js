var NominaService = require("../services/nomina.service")

// Saving the context of this module inside the _the variable
_this = this;

exports.getOneNomina = async (req, res, next) => {
var id = req.params.id;
  try {
    var nomina = await NominaService.getOneNomina(id)
    res.json(nomina)
  } catch (e) {
    throw Error('Error al buscar el registro seleccionado. Err: ' + e);
  }
}

exports.getNominas = async (req, res, next) => {
  var query = {};
  try {
    var nominas = await NominaService.getNominas(query)
    res.json(nominas)
  } catch (e) {
    throw Error('Error al buscar los registros seleccionado. Err: ' + e);
  }
}

exports.createNomina = async (req, res, next) => {
  var nomina = ({
    ingresado: req.body.ingresado,
    sacado: req.body.sacado,
    fecha: req.body.fecha,
    comentario: req.body.comentario,
    quien: req.body.quien,
    mes: req.body.mes,
  })

  try {
    var createNomina = await NominaService.createNomina(nomina)
    res.json(createNomina);
  } catch (e) {
    // return a Error message describing the reason     
    throw Error("Error al crear el registroa. Err.: " + e)
  }
}

exports.updateNomina = async (req, res, next) => {
  if (!req.params.id) {
    return res.status(400).json({ status: 400., message: "Id must be present" })
  }
  var id = req.params.id;

  var nomina = ({
    id,
    ingresado: req.body.ingresado,
    sacado: req.body.sacado,
    fecha: req.body.fecha,
    comentario: req.body.comentario,
    quien: req.body.quien,
    mes: req.body.mes,
  })

  try {
    // Calling the Service function with the new object from the Request Body
    var updateNomina = await NominaService.updateNomina(nomina)
    res.json(updateNomina);
  } catch (e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({ status: 400, message: "Error al actualizar el registro. Error: " + e })
  }
}

exports.deleteNomina = async (req, res, next) => {
  var id = req.params.id;
  try {
    var nomina = await NominaService.deleteNomina(id);
    res.json(nomina)
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: 400, message: "Error al eliminar el registro. Error: " + e })
  }
}
