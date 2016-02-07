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

      models.messages.pull(function(err, returnData) {
        if(err) {
          console.error(err);
        } else {
          res.json(returnData);
        }
        
      //   returnData.forEach(function(message) {

      //     var username, roomname;
      //     message.username = models.users.getName(message.user_id, function(name) {
      //       return name;
      //     });
      //     message.roomname = models.rooms.getName(message.room_id, function(name) {
      //       return name;
      //     });
          
      //   });
        
      //   sendResponse(res, returnData);
      // });
       
    });
    }, // a function which handles a get request for all messages
    
    // User wants to add a new message
    post: function (req, res) {
      var params = [req.body.text, req.body.username, req.body.roomname];
      models.messages.push(params, function(err, returnData) {
        if(err) {
          console.error(err);
        } else {
          res.json(returnData);
        }
      });
      
      
      // models.users.postId(req.body.username, function(id) {return;});
      // models.rooms.postRoomId(req.body.roomname, function(id) {return;});
      // var userId = models.users.getId(req.body.username, function(id) {return id;});
      // var roomId = models.rooms.roomId(req.body.roomname, function(id) {return id;});
      
      // var formattedMessage = {
      //   text: req.body.text,
      //   id_users: userId,
      //   id_roomnames: roomId
      // };
      
      //Send formatted message along to models
      


    }, // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, returnData) {
        if(err) {
          console.error(err);
        } else {
          res.json(returnData);
        }
      });
    },
    post: function (req, res) {
      var params = [req.body[username]];
      models.users.post(params, function(err, returnData) {
        if(err) {
          console.error(err);
        } else {
          res.json(returnData);
        }
      });
    }
  }
};

// var collectData = function(request, callback) {
//   var data = '';
//   request.on('data', function(chunk) {
//     data += chunk;
//   });
//   request.on('end', function() {
//     callback(JSON.parse(data));
//   });
// };

// var sendResponse = function(response, data, statusCode) {
//   console.log("send response invoked!");
//   statusCode = statusCode || 200;
//   response.writeHead(statusCode, headers);
//   response.end(JSON.stringify(data));
// };

// var headers = {
//   "access-control-allow-origin": "*",
//   "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "access-control-allow-headers": "content-type, accept",
//   "access-control-max-age": 10, // Seconds.
//   "Content-type": "application/json"
// };

// var message = {
    //   username: app.username,
    //   text: app.$message.val(),
    //   roomname: app.roomname || 'lobby'
    // };