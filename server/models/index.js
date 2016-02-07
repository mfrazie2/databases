var db = require('../db');
var connection = db.connection;

connection.connect();
//Manipulates data so it can enter database
// Query the data base to retrieve user ids and room ids?

module.exports = {
  messages: {
    pull: function (callback) {
        console.log("This is inside models.get");
        // Goes to database to get message information
        connection.query('SELECT * from message', function(err, dataResults) {
          //Error handling; if successful, data is passed to controller via callback once done fetching
          if(err){
            console.log("Could not process request.");
          } else {
            //console.log(dataResults);
            callback(dataResults);
          }
        });

    }, // a function which produces all the messages
    push: function (message, callback) { 
      console.log("Inside models post " + message);
     
      connection.query('INSERT into MESSAGE set ?', message, function(err, result) {
        if (err) {
          console.log(err);
        } else{
          console.log("This is in the database!");
          //console.log(result);
          callback(result);
        }
      });
    // a function which can be used to insert a message into the database
    //  connection.query('insert into message' values )
    }
  },

  users: {
    // Ditto as above.
    // Helps control information putting into database
    getId: function (name, callback) {
      // take name --> id_users
      connection.query('SELECT id from users WHERE username = ?', [name], function(err, id){
        callback(id);
      });
    },
    postId: function (name, callback) {
      connection.query('INSERT into users (username) values (', + name + ')', function(err, id) {
        callback(id);
      });
    },
    getName: function(id, callback) {
      connection.query('SELECT username from users WHERE id = ?', [id], function(err, name) {
        callback(name);
      });
    }
  },

  rooms: {
    roomId: function (room, callback) {
      connection.query('SELECT id from roomnames WHERE roomname = ?', [room], function(err, id){
        callback(id); 
      });
    },
    postRoomId: function (room, callback) {
      connection.query('INSERT into roomnames (roomname) values (', + room + ')', function(err, id){
        callback(id); 
      });
    },
    getName: function(id, callback) {
      connection.query('SELECT roomname from roomnames WHERE id = ?', [id], function(err, name) {
        callback(name);
      });
    }
  }
  
  // create a roomname property
};

