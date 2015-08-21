module.exports = function (request, response){

	var fs = require('fs');
	response.writeHead(200, {'Content-type': 'text/html'});
	console.log('Request', request.url);
	if(request.url.search('.css') !== -1){
		fs.readFile('.' + request.url, 'utf8', function(errors, contents){
	        response.writeHead(200, {'Content-type': 'text/css'});
	        response.write(contents);
	        response.end();
		});
	}
	else if(request.url.search('.html') !== -1){
		fs.readFile('./views' + request.url, 'utf8', function(errors, contents){
	        response.writeHead(200, {'Content-type': 'text/html'});
	        response.write(contents);
	        response.end();
		});
	}
	else if(request.url.search('.jpg') !== -1){
		fs.readFile('.' + request.url, function(errors, contents){
	        response.writeHead(200, {'Content-type': 'image/jpg'});
	        response.write(contents);
	        response.end();
		});
	}
	else if(request.url.search('.jpeg') !== -1){
		fs.readFile('.' + request.url, function(errors, contents){
	        response.writeHead(200, {'Content-type': 'image/jpeg'});
	        response.write(contents);
	        response.end();
		});
	}
	else if(request.url.search('.gif') !== -1){
		fs.readFile('.' + request.url, function(errors, contents){
	        response.writeHead(200, {'Content-type': 'image/gif'});
	        response.write(contents);
	        response.end();
		});
	}
	else if(request.url.search('.png') !== -1){
		fs.readFile('.' + request.url, function(errors, contents){
	        response.writeHead(200, {'Content-type': 'image/png'});
	        response.write(contents);
	        response.end();
		});
	}
}