var express = require("express");
var router = express.Router();
var compraController = require("../controllers/compra.controller");

//const jwtAuthz = require('express-jwt-authz');

router.route("/")
  .get(compraController.getCompras)
  .post(compraController.createCompra)

router.route("/:id")
  .get(compraController.getOneCompra)
  .delete(compraController.deleteCompra)
  .put(compraController.updateCompra)

module.exports = router;
