var express = require("express");
var router = express.Router();
var ingresoController = require("../controllers/ingreso.controller");

//const jwtAuthz = require('express-jwt-authz');

router.route("/")
  .get(ingresoController.getIngresos)
  .post(ingresoController.createIngreso)

router.route("/:id")
  .get(ingresoController.getOneIngreso)
  .delete(ingresoController.deleteIngreso)
  .put(ingresoController.updateIngreso)

module.exports = router;
