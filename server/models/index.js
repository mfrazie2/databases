var db = require('../db');
var connection = db.connection;

connection.connect();
//Manipulates data so it can enter database
// Query the data base to retrieve user ids and room ids?

module.exports = {
  messages: {
    get: function (callback) {
        console.log("This is inside models.get");
        // Goes to database to get message information
        connection.query('SELECT * from message', function(err, dataResults) {
          //Error handling; if successful, data is passed to controller via callback once done fetching
          if(err){
            console.log("Could not process request.");
          } else {
            console.log(dataResults);
            callback(dataResults);
          }
        });

    }, // a function which produces all the messages
    post: function (message, callback) { 
      console.log("Inside models post " + message);
      //{ username: '', text: 'hiiiiiii', roomname: 'lobby' }
      var formattedMessage = {
        text: message.text,
        id_users: userId,
        id_roomnames: roomId
      };
      // take message.username --> id_users
      var userId = connection.query('SELECT id from users WHERE username = ?', message.username);
      // take message.roomname --> id_roomnames
      var roomId = connection.query('SELECT id from roomnames WHERE roomname = ?', message.roomname);
      connection.query('INSERT into MESSAGE set ?', formattedMessage, function(err, result) {
        if (err) {
          console.log(err);
        } else{
          console.log("This is in the database!");
          console.log(result);
          callback(result);
        }
      });
    // a function which can be used to insert a message into the database
    //  connection.query('insert into message' values )
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
  
  // create a roomname property
};

