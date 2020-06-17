//Install express server
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const logger = require('morgan');
const pjson = require('./package.json');
const dateFormat = require('dateformat');

require('dotenv').config()

const app = express();
const recibo = require('./src/server/routes/recibo.router');
const hipoteca = require('./src/server/routes/hipoteca.router');
const compra = require('./src/server/routes/compra.router');
const ingreso = require('./src/server/routes/ingreso.router');
const nomina = require('./src/server/routes/nomina.router');
const resumen = require('./src/server/routes/resumen.router');

const port = process.env.PORT || 4200;

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.API_AUTH0_DOMAIN}/.well-known/jwks.json`
  }),
  audience: `https://${process.env.API_AUTH0_AUDIENCE}/`,
  issuer: `https://${process.env.API_AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});

//--- Set up app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(cors());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
//app.use(express.static('./dist/control-gastos/'));

//RUTAS ANGULAR
app.use('/callback', express.static('./dist/control-gastos/'));
app.use('/recibos', express.static('./dist/control-gastos/'));
app.use('/hipotecas', express.static('./dist/control-gastos/'));
app.use('/compras', express.static('./dist/control-gastos/'));
app.use('/ingresos', express.static('./dist/control-gastos/'));
app.use('/nominas', express.static('./dist/control-gastos/'));


//RUTAS NODE
app.use('/api/', jwtCheck);
app.use('/api/recibo', jwtCheck, recibo);
app.use('/api/hipoteca', jwtCheck, hipoteca);
app.use('/api/compra', jwtCheck, compra);
app.use('/api/ingreso', jwtCheck, ingreso);
app.use('/api/nomina', jwtCheck, nomina);
app.use('/api/resumen', jwtCheck, resumen);

app.get("/info", (req, res) => {
  var info = {
    autor: pjson.author.name,
    fecha: dateFormat(git.date(), "dd/mm/yyyy"),
    version: pjson.version,
  }
  res.json(info);
})

app.use(function (req, res, next) {
  var err = new Error('Not Found: ' + err);
  err.status = 404;
  next(err);
});

// Start the app by listening on the default Heroku port
app.set('port', port);
app.listen(port, () => { });

console.log("Puerto: " + port);
