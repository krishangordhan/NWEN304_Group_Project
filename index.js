var express = require('express');
var pg = require('pg');
var app = express();
var http = require('http');
var port = process.env.PORT || 8080;
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require ('path');
//connecting to Postgres locally
var connectionString = "postgres://dtxszhltugvtsq:aef48216097f039b8eae0cb71c9f2f65a1c099160f9686b8681ee3a10b48a95b@ec2-50-19-218-160.compute-1.amazonaws.com:5432/d5d77orodbj15i";

require('./passport')(passport); // pass passport for configuration

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({	extended: true})); // get information from html forms
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);


app.listen(port, function () {

 console.log('Example app listening on port 8080!');
}); 





//Setup for postgres db requires ssl connection

pg.defaults.ssl = true;
pg.connect(connectionString, function (err, client) {
    if (err) throw err;
    console.log('Connected to postgres! Getting schemas...');

    client
        .query('SELECT table_schema,table_name FROM information_schema.tables;')
        .on('row', function (row) {
            console.log(JSON.stringify(row));
        });
});

app.post('/search', function (req, res) {
    var queryStart = req.indexOf("=");
    var queryEnd = req.length + 1;
    var queryterm = req.slice(queryStart + 1, queryEnd - 1);

    var client = new pg.Client(connectionString);

    client.connect(function (err) {
        if (err) {
            return console.error("error in request connect", err);
        }
    });

    query = cient.query("SELECT * FROM products WHERE name =" + searchs + " OR author = " + searchs + " OR isbn = " + searchs + " OR genre = " + searchs, function (err) {
        if (err) {
            return console.error("error in request query", err);
        }
    });
    var results = [];
    query.on('row', function (row) {
        results.push(row);
    });
    query.on('end', function () {
        client.end(function (err) {
            console.log(results);
            if (err) { return console.error("error in request end", err); }
            var list = JSON.stringify(results);
            res.send(list);
        });
    });


});
app.get('/request', function (req, res) {
    var queryStart = req.indexOf("=");
    var queryEnd = req.length + 1;
    var queryterm = req.slice(queryStart + 1, queryEnd - 1);

    var client = new pg.Client(connectionString);

    client.connect(function (err) {
        if (err) {
            return console.error("error in request connect", err);
        }
    });

    query = client.query("SELECT * FROM products WHERE id = " + queryterm, function (err) {
        if (err) {
            return console.error("error in request query", err);
        }
    });
    var results = [];
    query.on('row', function (row) {
        results.push(row);
    });
    query.on('end', function () {
        client.end(function (err) {
            console.log(results);
            if (err) { return console.error("error in request end", err); }
            var list = JSON.stringify(results);
            res.send(list);
        });
    });
});


app.post('/updateData', function(req, res){
    var queryStart = req.indexOf("=");
    var queryEnd = req.length + 1;
    var queryterm = req.slice(queryStart + 1, queryEnd - 1);

    var client = new pg.Client(connectionString);
    client.connect(function (err) {
        if (err) {
            return console.error("error in request connect", err);
        }
    });

    query = client.query("UPDATE products SET no_visitors = no_visitors + 1 WHERE id = " + queryterm, function (err) {
        if (err) {
            return console.error("error in updateData query", err);
        }
    });
})


// required for passport
app.use(session({ secret: 'nwen304webdevelopment',
	resave: true,
	saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
require('./routes.js')(app, passport); // load our routes and pass in our app and fully configured passport*/

