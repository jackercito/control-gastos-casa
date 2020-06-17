var express = require("express");
var router = express.Router();
var hipotecaController = require("../controllers/hipoteca.controller");

//const jwtAuthz = require('express-jwt-authz');

router.route("/")
  .get(hipotecaController.getHipotecas)
  .post(hipotecaController.createHipoteca)

router.route("/:id")
  .get(hipotecaController.getOneHipoteca)
  .delete(hipotecaController.deleteHipoteca)
  .put(hipotecaController.updateHipoteca)

module.exports = router;
