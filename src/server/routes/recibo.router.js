var express = require("express");
var router = express.Router();
var reciboController = require("../controllers/recibo.controller");

//const jwtAuthz = require('express-jwt-authz');

router.route("/")
  .get(reciboController.getRecibo)
  .post(reciboController.createRecibo)

router.route("/:id")
  .get(reciboController.getOneRecibo)
  .delete(reciboController.deleteRecibo)
  .put(reciboController.updateRecibo)

module.exports = router;
