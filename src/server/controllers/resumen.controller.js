var xl = require('excel4node');

var CompraService = require("../services/compra.service");
var HipotecaService = require("../services/hipoteca.service");
var IngresoService = require("../services/ingreso.service");
var NominaService = require("../services/nomina.service");
var ReciboService = require("../services/recibo.service");
 
// Saving the context of this module inside the _the variable
_this = this;

exports.getResumen = async(req, res, next) => {
  var mes = "Mayo"
  var anno = 2020
  var f_inicio = req.params.fechaInicio;
  var f_fin = req.params.fechaFin;

  var query = { "fecha": { '$gte': new Date(f_inicio), '$lte': new Date(f_fin) } };

  /*var quey_recibo = {
    "$or": [{ ...query }, { meses: { "$in": mes }}]
  }*/

  try {
    var hipoteca = await HipotecaService.getHipotecas(query);
    var nomina = await NominaService.getNominas(query)
    var ingreso = await IngresoService.getIngresos(query)
    var compra = await CompraService.getCompras(query)
    var recibo = await ReciboService.getRecibo(query)

    var array = [];

    for (h of hipoteca) {
      var elemento = {
        fecha: h.fecha,
        concepto: 'Hipoteca',
        importe: -h.importe,
        detalle: ''
      }

      array.push(elemento)  
    }
      

    for (n of nomina) {
      var elementoI = {
        fecha: n.fecha,
        concepto: 'Nomina (I)',
        importe: n.ingresado,
        detalle: ''
      }

      var elementoS = {
        fecha: n.fecha,
        concepto: 'Nomina (S)',
        importe: -n.sacado,
        detalle: ''
      }

      array.push(elementoI)  
      array.push(elementoS)   
    }

    for (i of ingreso) {
      var elemento = {
        fecha: i.fecha,
        concepto: 'Ingreso',
        importe: i.importe,
        detalle: ''
      }

      array.push(elemento)   
    }

    for (c of compra)
      if (c.igualarACero == false) {
        var elemento = {
          fecha: c.fecha,
          concepto: 'Compra',
          importe: -c.importe,
          detalle: c.comentario
        }

        array.push(elemento)  
      }

    for (r of recibo) {
      var elemento = {
        fecha: r.fecha,
        concepto: 'Recibo',
        importe: -r.importe,
        detalle: `${r.tipo} : ${r.meses}`
      }

      array.push(elemento)     
    }

    var wb = new xl.Workbook();
    var style = wb.createStyle({
      numberFormat: '#,##0.00 €; -#,##0.00 €; '
    });

    var ws = wb.addWorksheet();

    ws.cell(1, 1).string("Fecha");
    ws.cell(1, 2).string("Concepto");
    ws.cell(1, 3).string("Importe");
    ws.cell(1, 4).string("Acumulado");
    ws.cell(1, 5).string("Detalle");

    var r = 2;
    var acumulado = 0;

    for (elemento of array) {      
      ws.cell(r, 1).date(elemento.fecha).style({ numberFormat: 'dd/mm/yyyy' });
      ws.cell(r, 2).string(elemento.concepto);
      ws.cell(r, 3).number(elemento.importe).style(style);
      ws.cell(r, 4).number(acumulado + elemento.importe).style(style);
      ws.cell(r, 5).string(elemento.detalle);

      acumulado += elemento.importe;
      r++;
    }

    wb.write('./files/listado.xlsx', res);

    //return "ok"
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: 400, message: "Error al buscar el registro. Error: " + e })
  }
  
}
