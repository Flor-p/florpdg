var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var novedadesModel = require('../models/novedadesModel');

/* GET home page. */
router.get('/', async function(req, res, next) {

  var novedades = await novedadesModel.getNovedades();
  novedades = novedades.splice(0,5);
  res.render('index', { 
    novedades
   })

});


router.post('/', async(req, res, next) => {
console.log (req.body) //estoy capturando datos?

 var name = req.body.name;
 var email = req.body.email;
 var message = req.body.message;

 var obj = {
  to: 'florparamidani@gmail.com',
  subject: 'CONTACTO WEB',
  html: name + "se contactó a través de la web y quiere más información a este correo : "
+ email
 };


var transport = nodemailer.createTransport({
 host: process.env.SMTP_HOST,
 port: process.env.SMTP_PORT,
 auth: {
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS,
 }

});

var info = await transport.sendMail(obj);
res.render ('contacto', { 
  message: 'Mensaje enviado correctamente'
});

 });

<<<<<<< HEAD

=======
>>>>>>> 25bc13cddfc4d126c8d18023a7af66bd3c0d1e9c
module.exports = router;
