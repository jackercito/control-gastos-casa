var ReciboService = require("../services/recibo.service")

// Saving the context of this module inside the _the variable
_this = this;

exports.getRecibo = async (req, res, next) => {
  var query = {};
  try {
    var recibo = await ReciboService.getRecibo(query)
    res.json(recibo)
  } catch (e) {
    return res.status(400).json({ status: 400, message: "Error al buscar el registro. Error: " + e })
  }
}

exports.getOneRecibo = async (req, res, next) => {
  var id = req.params.id;
  try {
    var recibo = await ReciboService.getOneRecibo(id);    
    res.json(recibo)
  } catch (err) {
    return res.status(400).json({ status: 400, message: "Error al buscar el registro. Error: " + err })
  }
}

exports.createRecibo = async (req, res, next) => {
  var recibo = ({
    fecha: req.body.fecha,
    meses: req.body.meses,    
    tipo: req.body.tipo,
    importe: req.body.importe,
    consumo: req.body.consumo,
    unidad: req.body.unidad,
    nota: req.body.nota,
    periodo: req.body.periodo,
    ant_post: req.body.ant_post,
  })

  try {
    var createRecibo = await ReciboService.createRecibo(recibo)
    res.json(createRecibo);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: 400, message: "Error al crear el registro. Error: " + e })
  }
}

exports.updateRecibo = async (req, res, next) => {
  if (!req.params.id) {
    return res.status(400).json({ status: 400., message: "Id must be present" })
  }
  var id = req.params.id;

  var recibo = ({
    id,
    fecha: req.body.fecha,
    meses: req.body.meses,
    tipo: req.body.tipo,
    importe: req.body.importe,
    consumo: req.body.consumo,
    unidad: req.body.unidad,
    nota: req.body.nota,
    periodo: req.body.periodo,
    ant_post: req.body.ant_post,
  })

  try {
    // Calling the Service function with the new object from the Request Body
    var updateRecibo = await ReciboService.updateRecibo(recibo)
    res.json(updateRecibo);
  } catch (e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({ status: 400, message: "Error al actualizar el registro. Error: " + e })
  }
}

exports.deleteRecibo = async (req, res, next) => {
  var id = req.params.id;
  try {
    var recibo = await ReciboService.deleteRecibo(id);
    res.json(recibo)
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: 400, message: "Error al eliminar el registro. Error: " + e })
  }
}
