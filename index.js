var express = require('express');
var pg = require('pg');
var app = express();
var port = process.env.PORT || 8080;
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
//connecting to Postgres locally
var connectionString= "postgres://dtxszhltugvtsq:aef48216097f039b8eae0cb71c9f2f65a1c099160f9686b8681ee3a10b48a95b@ec2-50-19-218-160.compute-1.amazonaws.com:5432/d5d77orodbj15i";
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.get('/', function (req, res) {
 res.send('Hello World!');
});
app.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login.html', { message: req.flash('loginMessage') }); 
    });
 // process the login form
 // app.post('/login', do all our passport stuff here);
app.get('/Register', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });
// process the signup form
// app.post('/signup', do all our passport stuff here);
app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
	
app.listen(port, function () {
 console.log('Example app listening on port 8080!');
}); 



//Setup for postgres db requires ssl connection

pg.defaults.ssl = true;
pg.connect(connectionString, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});


/*
// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
*/