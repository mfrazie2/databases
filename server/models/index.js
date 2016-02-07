var db = require('../db');

//Manipulates data so it can enter database
// Query the data base to retrieve user ids and room ids?

module.exports = {
  messages: {
    pull: function (callback) {
        // Goes to database to get message information
        var queryStr = "select message.id, message.text, message.roomname, users.username from message";
            queryStr += " left outer join users on (message.id_users = users.id)";
            queryStr += " order by message.id desc";
        db.query(queryStr, function(err, result) {
          if(err) {
          console.error(err);
        } else {
          callback(result);
        }
        });

    }, // a function which produces all the messages
    push: function (params, callback) { 
      var queryStr = "insert into message(text, id_users, roomname)";
          queryStr = " values (text, (select id from users where username = ?), roomname)";
      db.query(queryStr, params, function(err, result) {
        if(err) {
          console.error(err);
        } else {
          callback(result);
        }
      });
    }
  },

  users: {
    get: function (name, callback) {
      // take name --> id_users
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results){
        if(err) {
          console.error(err);
        } else {
          callback(result);
        }
      });
    },
    post: function (params, callback) {
      var queryStr = 'insert into users(username) values (?)';
      db.query(queryStr, params, function(err, results){
        if(err) {
          console.error(err);
        } else {
          callback(result);
        }
      });
    },
    // getName: function(id, callback) {
    //   db.query('SELECT username from users WHERE id = ?', [id], function(err, name) {
    //     callback(name);
    //   });
    // }
  }

  // rooms: {
  //   roomId: function (room, callback) {
  //     db.query('SELECT id from roomnames WHERE roomname = ?', [room], function(err, id){
  //       callback(id); 
  //     });
  //   },
  //   postRoomId: function (room, callback) {
  //     db.query('INSERT into roomnames (roomname) values (', + room + ')', function(err, id){
  //       callback(id); 
  //     });
  //   },
  //   getName: function(id, callback) {
  //     db.query('SELECT roomname from roomnames WHERE id = ?', [id], function(err, name) {
  //       callback(name);
  //     });
  //   }
  // }
  
  // create a roomname property
};

