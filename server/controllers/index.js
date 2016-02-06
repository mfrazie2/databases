var models = require('../models');
var bluebird = require('bluebird');

//Decide when/how go to database
// delegate to the models

module.exports = {
  messages: {
    // User wants to get messages in room 
    get: function (req, res) {
      //fetch data from models
      //return data within callback to account for asynch
     // console.log(models);
      models.messages.get(function(returnData) {
        console.log(returnData);
        sendResponse(res, returnData);
      });
        // res.end(something with returnData);})
    }, // a function which handles a get request for all messages
    
    // User wants to add a new message
    post: function (req, res) {
      console.log("I'm posting!");
      console.log(req.body);
      //collectData(req, function(message) {
        models.messages.post(req.body, function(returnData) {
          sendResponse(res, returnData);
        });
      //});
      // collect data(req, function())
    }, // a function which handles posting a message to the database
    options: function(req, res){
      sendResponse(res);
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

// sendResponse
// gatherData


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
  console.log("send response invoked!");
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
};

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  "Content-type": "application/json"
};

// var message = {
    //   username: app.username,
    //   text: app.$message.val(),
    //   roomname: app.roomname || 'lobby'
    // };