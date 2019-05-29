var express = require('express');
var database = require('./db');
var app = express();

var body = require('body-parser');
app.use(body.urlencoded({extended : true}));



app.get("/", function(req, res){
    database.getuser();    
    res.writeHead(200, {"Content-type" : "text/html"});
    res.write("<h1>Formulaire</h1>");
    res.write("<form method='POST' action='/form'> ");
    res.write("<input type='text' name='login' />");
    res.write("<input type='password' name='pass' />");
    res.write("<input type='submit' value='Click me !' />");
    res.write("</form>");
    res.end();
});

app.get("/form", function(req, res){
    
    res.writeHead(200, {"Content-type" : "text/html"});
    console.log(req);
    var guillaume = req.query.login;
    var pass = req.query.pass;
    
    res.write("<h1>Bienvenue " + pass + "</h1>");
    res.end();
});

app.post("/form", function(req, res){
    console.log("Yo je rentre");
    res.writeHead(200, {"Content-type" : "text/html"});
    console.log(req.body);
    var login = req.body.login;
    var pass = req.body.pass;
    
    database.adduser(login, pass);
    
    res.write("<h1>Bienvenue " + login + "</h1>");
    res.end();
});

app.listen(3000);
console.log ("hey, ca marche !!!");
