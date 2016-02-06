var db = require('../db');
var connection = db.connection.connect();

//Manipulates data so it can enter database

module.exports = {
  messages: {
    get: function (message) {

    }, // a function which produces all the messages
    post: function (text, username, roomname) { // a function which can be used to insert a message into the database
      connection.query('insert into message' values )
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

