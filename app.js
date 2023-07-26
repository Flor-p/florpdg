var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


require('dotenv').config();
var session = require('express-session');
var pool = require('./models/bd');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');
var adminRouter = require('./routes/admin/novedades');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: '81dc9bdb52d04dc20036dbd8313ed055',
  resave: false,
  saveUninitialized: true
}));

secured = async (req, res, next) => {
  try {
    console.log(req.session.id_usuario);
    if (req.session.id_usuario){
      next();
    } else {
      res.redirect('/admin/login');
    }
  } catch(error){
    console.log(error);
    res.redirect('/admin/login');
  }
};

app.use('/', indexRouter);
<<<<<<< HEAD
//app.use('/users', usersRouter);
//app.use('/admin/login', loginRouter);


=======
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/novedades' , secured, adminRouter);
>>>>>>> 25bc13cddfc4d126c8d18023a7af66bd3c0d1e9c


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
