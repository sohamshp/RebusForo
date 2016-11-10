var http       = require('http');
var fs         = require('fs');
var url        = require('url');
var dispatcher = require('httpdispatcher');

// Normal Method

var sv = http.createServer(function(req, res){
    // Extract requested url
    var pathname = url.parse(req.url).pathname;
    if (pathname==='/') {
        pathname = '/index.html';
    }

    console.log(pathname+' requested.');
    fs.readFile(pathname.substr(1), function(err, data){
        if (err) {
            res.writeHead(404, {'Content-Type':'text/html'});
        }
        else {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data.toString());
            console.log(pathname+' loaded.');
        }
        res.end();
    });
});


// Using httpdispatcher module
/*
var sv = http.createServer(function(request, response){
    try {
        console.log(request.url);
        //console.log(request);
        dispatcher.dispatch(request, response);
    }
    catch (err) {
        console.log(err);
    }
});

// Set relative path for static files
dispatcher.setStatic('resources');

// Sample GET request
dispatcher.onGet('/page1', function(request, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end('page one');
});

// Sample POST request
dispatcher.onPost('/post1', function(request, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end('Got POST data');
});

dispatcher.onGet('/', function(request, response){
    fs.readFile('index.html', function(err, data){
        if (err) {
            response.writeHead(404, {'Content-Type':'text/html'});
        }
        else {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(data.toString());
            //console.log(pathname+' loaded.');
        }
        response.end();
    });
});

dispatcher.onGet('/index', function(request, response){
    fs.readFile('index.html', function(err, data){
        if (err) {
            response.writeHead(404, {'Content-Type':'text/html'});
        }
        else {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(data.toString());
            //console.log(pathname+' loaded.');
        }
        response.end();
    });
});

dispatcher.onPost('/action1', function(request, response){
    console.log('asdasdasd');
});

// error 404
dispatcher.onError(function(request, response){
    response.writeHead(404);
});
*/

// listening
sv.listen(8888);
console.log('at port 8888');