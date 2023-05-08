var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
router.post('/', async (req, res, next) )
console.log (req.body)

var name = req.body.name;
var email = req.body.email;
var message = req.body.message;

var obj = {
to: 'florparamidani@gamail.com',
subject: 'Contacto desde la web',
html: name + email + message
}

var transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }
})

var info = await transporter.sendMail(obj);

