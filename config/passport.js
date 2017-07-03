// config/passport.js


// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;

// load up the user model
var bcrypt = require('bcrypt-nodejs');
const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
const connectionString = "postgres://dtxszhltugvtsq:aef48216097f039b8eae0cb71c9f2f65a1c099160f9686b8681ee3a10b48a95b@ec2-50-19-218-160.compute-1.amazonaws.com:5432/d5d77orodbj15i";


//set up db connection

// expose this function to our app using module.exports

//configure to our db



 





module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        connection.query("SELECT * FROM users WHERE id = ? ",[id], function(err, rows){
            done(err, user);
        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        emailField : 'email',
        passwordField : 'password',
		
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
		//open connection
        pg.defaults.ssl = true;
		pg.connect(connectionString, function (err, client,done) {
			if (err) throw err;
			done();
			console.log('Connected to postgres! Getting schemas...');
			});
       

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
		client.query("SELECT * FROM users WHERE username = ?",[username], function(err, rows) { 
            // if there are any errors, return the error
            if (err)
                return done(err);

            // check to see if theres already a user with that email
             if (rows.length) {
                    return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
                } else {
		
                // if there is no user with that email
                // create the user
                 var newUser = {
                        username: username,
                        password: bcrypt.hashSync(password, null, null)  // use the generateHash function in our user model
                    };

                    var insertQuery = "INSERT INTO users ( username, password ) values (?,?)";

                    client.query(insertQuery,[newUser.username, newUser.password],function(err, rows) {
                        newUserMysql.id = rows.insertId;

                        return done(null, newUserMysql);
                });
            }

        });    

        

    }));
	

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

   passport.use(
        'local-login',
        new LocalStrategy({
			
			
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'username',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) { // callback with email and password from our form
		
		//open connection
        pg.defaults.ssl = true;
		pg.connect(connectionString, function (err, client,done) {
			if (err) throw err;
			done();
			console.log('Connected to postgres! Getting schemas...');
			});
		
            client.query("SELECT * FROM users WHERE username = ?",[username], function(err, rows){
                if (err)
                    return done(err);
                if (!rows.length) {
                    return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
                }

                // if the user is found but the password is wrong
                if (!bcrypt.compareSync(password, rows[0].password))
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

                // all is well, return successful user
                return done(null, rows[0]);
        });

    }));

};

//create table users(id BIGSERIAL PRIMARY KEY UNIQUE, username VARCHAR(20) NOT NULL UNIQUE, password CHAR(60) NOT NULL);
