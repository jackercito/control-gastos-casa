var express = require("express");
var router = express.Router();
var nominaController = require("../controllers/nomina.controller");

//const jwtAuthz = require('express-jwt-authz');

router.route("/")
  .get(nominaController.getNominas)
  .post(nominaController.createNomina)

router.route("/:id")
  .get(nominaController.getOneNomina)
  .delete(nominaController.deleteNomina)
  .put(nominaController.updateNomina)

module.exports = router;
