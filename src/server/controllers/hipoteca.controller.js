var HipotecaService = require("../services/hipoteca.service")

// Saving the context of this module inside the _the variable
_this = this;

exports.getHipotecas = async (req, res, next) => {
  var query = {};
  try {
    var hipoteca = await HipotecaService.getHipotecas(query)
    res.json(hipoteca)
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: 400, message: "Error al buscar el registro. Error: " + e })
  }
}

exports.getOneHipoteca = async (req, res, next) => {
  var id = req.params.id;
  try {
    var hipoteca = await HipotecaService.getOneHipoteca(id);
    res.json(hipoteca)
  } catch (err) {
    return res.status(400).json({ status: 400, message: "Error al buscar el registro. Error: " + err })
  }
}

exports.createHipoteca = async (req, res, next) => {
  var hipoteca = ({
    fecha: req.body.fecha,
    modo: 'Manual',
    tipo: req.body.tipo,
    amortizacion: req.body.amortizacion,
    importe: req.body.importe,
    importe_capital: req.body.importe_capital,
    importe_intereses: req.body.importe_intereses,
    interes: 1.4,
    persona: 'Comun',
  })

  try {
    var createHipoteca = await HipotecaService.createHipoteca(hipoteca)
    res.json(createHipoteca);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: 400, message: "Error al crear el registro. Error: " + e })
  }
}

exports.updateHipoteca = async (req, res, next) => {
  if (!req.params.id) {
    return res.status(400).json({ status: 400., message: "Id must be present" })
  }
  var id = req.params.id;

  var hipoteca = ({
    id,
    fecha: req.body.fecha,
    modo: req.body.modo,
    tipo: req.body.tipo,
    amortizacion: req.body.amortizacion,
    importe: req.body.importe,
    importe_capital: req.body.importe_capital,
    importe_intereses: req.body.importe_intereses,
    interes: 1.4,
    persona: req.body.persona,
  })

  try {
    // Calling the Service function with the new object from the Request Body
    var updateHipoteca = await HipotecaService.updateHipoteca(hipoteca)
    res.json(updateHipoteca);
  } catch (e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({ status: 400, message: "Error al actualizar el registro. Error: " + e })
  }
}

exports.deleteHipoteca = async (req, res, next) => {
  var id = req.params.id;
  try {
    var hipoteca = await HipotecaService.deleteHipoteca(id);
    res.json(hipoteca)
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: 400, message: "Error al eliminar el registro. Error: " + e })
  }
}
