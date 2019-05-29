var http = require('http'); 
var url = require('url');

var server = http.createServer("/", function(req, res){
    
    var mypath = url.parse(req.url).pathname;
    console.log(mypath);
    if (mypath == "/mapage"){
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write("<h1>Yo " + mypath + "</h1>");
    
    }
    else if (mypath == "/test"){
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write("<h1>Yo Alexandre !!! </h1>");
    }
    else {
        res.writeHead(404, {"Content-Type" : "text/html"});
        res.write("<h1>Cette page " + mypath + "n'existe pas !!! </h1>");
    }
    res.end();
    
});

server.listen(3000);
console.log("Yeah baby, my server is running on port 3000 !!!");