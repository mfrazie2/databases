var urlParser = require('url');

// var All_Messages = [];

// var objectId = 1;

var routes = {
  '/classes/chatterbox': true,
  '/classes/room1': true,
  '/classes/messages': true
}

var actions = {
  "GET": function(request, response) {
    sendResponse(response, {results: All_Messages});
  },
  "POST": function(request, response) {
    collectData(request, function(message) {
      All_Messages.push(message);
      message.objectId = objectId++;
      sendResponse(response, {objectId: objectId}, 201);
    });
  },
  "OPTIONS": function(request, response) {
    sendResponse(response);
  } 
};

var collectData = function(request, callback) {
  var data = '';
  request.on('data', function(chunk) {
    data += chunk;
  });
  request.on('end', function() {
    callback(JSON.parse(data));
  });
};

var sendResponse = function(response, data, statusCode) {
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
};

var requestHandler = function(request, response) {

  var method = request.method;
  
  var parts = urlParser.parse(request.url);
  //console.log(parts);
  var route = routes[parts.pathname];
  //console.log(route);
  
  
  var action = actions[method];
  if(action && route) {
    action(request, response);
  } else {
    sendResponse(response, 'Not Found', 404);
  }
  
  
};  
  
var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  "Content-type": "application/json"
};

exports.requestHandler = requestHandler;