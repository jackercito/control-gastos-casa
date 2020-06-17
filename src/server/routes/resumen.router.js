var express = require("express");
var router = express.Router();
var resumenController = require("../controllers/resumen.controller");

//const jwtAuthz = require('express-jwt-authz');

router.route("/:fechaInicio/:fechaFin")
  .get(resumenController.getResumen)

module.exports = router;
