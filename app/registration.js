/*
var pg = require('pg');
var express = require('express');
var connectionString = "postgres://dtxszhltugvtsq:aef48216097f039b8eae0cb71c9f2f65a1c099160f9686b8681ee3a10b48a95b@ec2-50-19-218-160.compute-1.amazonaws.com:5432/d5d77orodbj15i";
var databaseName= 'client-data';
*/
function formValidation()  
{  
var email = document.getElementById("email").value;  
var confirmEmail = document.getElementById("confemail").value;
var pass = document.getElementById("psw").value;
var confPass = document.getElementById("confpsw").value;
var firstName = document.getElementById("firstname").value;  
var lastName = document.getElementById("lastname").value; 
var address = document.getElementById("address").value;  
var suburb = document.getElementById("suburb").value;  
var city = document.getElementById.city;  
var postcode = document.getElementById.postcode;

console.log(email);

if(allLetter(firstName))
{
if(allLetter(lastName))
{
if(allLetter(suburb))
{
	

if(allLetter(city))
{

if(emailValidation(email,confirmEmail))  
{ 

if(passid_validation(passid,6,40))  
{
	
if(alphanumeric(address))  
{ 

if(allnumeric(postcode))  
{ 

}
}
}
}	
}
}
}	
}
return false;
}  

function allnumeric(uzip)  
{   
var numbers = /^[0-9]+$/;  
if(uzip.value.match(numbers))  
{  
return true;  
}  
else  
{  
alert('ZIP code must have numeric characters only');  
uzip.focus();  
return false;  
}  
} 

function address(uadd)  
{   
var letters = /^[0-9a-zA-Z]+$/;  
if(uadd.value.match(letters))  
{  
return true;  
}  
else  
{  
alert('User address must have alphanumeric characters only');  
uadd.focus();  
return false;  
}  
}  

function emailValidation(email, confirmEmail){
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(email.value.match(mailformat) && email===confirmEmail)  
{  
return true;  
}  
else  
{  
alert("You have entered an invalid email address!");  
email.focus();  
return false;  
}  
}
function passwordValidation(passid,mx,my){
var passid_len = passid.value.length;  
if (passid_len == 0 ||passid_len >= my || passid_len < mx)  
{  
alert("Password should not be empty / length be between "+mx+" to "+my);  
passid.focus();  
return false;  
}  
return true; 
	
}

function allLetter(uname)  
{   
var letters = /^[A-Za-z]+$/;  
if(uname.value.match(letters))  
{  
return true;  
}  
else  
{  
alert('Names, suburd and city must contain letters only');  
 
return false;  
}  
}  