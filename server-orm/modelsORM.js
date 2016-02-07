/////////////////////// ORM SEQUELIZE \\\\\\\\\\\\\\\\\\\\\\\\\\\

var db = require('..dbSequelize');

module.exports = {
  messages: {
    get: function(callback) {
      // fetch all messages
      // id, text, roomname, username
      var queryStr = "select messages.id messages.text messages.roomname users.username from messages";
          queryStr += "left outer join users on (messages.userid = users.id)";
          queryStr += "order by messages.id desc";
      db.query(queryStr, function(err, results) {
        callback(results);
      });,
  
    post: function(params, callback) {
      var queryStr = "insert into messages(text, userid, roomname)";
          queryStr = "values (?, (select id from users where username = ? limit 1), ?)"
      db.query(queryStr, params, function(err, results) {
        callback(results);
      });
    }
  },
  
  users: {
    get: function(callback) {
      var queryStr = "select * from users";
      db.query(queryStr, function(err, results) {
        callback(results);
      });
  } ,
    post: function(params, callback) {
      var queryStr= "insert into users(usernames) values(?)";
      db.query(queryStr, params, function(err, results) {
        callback(results);
      });
    }
  
  }
}





/////////////////////// STRICT MySQL \\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
var db = require('..db');

module.exports = {
  messages: {
    get: function(callback) {
      // fetch all messages
      // id, text, roomname, username
      var queryStr = "select messages.id messages.text messages.roomname users.username from messages";
          queryStr += "left outer join users on (messages.userid = users.id)";
          queryStr += "order by messages.id desc";
      db.query(queryStr, function(err, results) {
        callback(results);
      });,
  
    post: function(params, callback) {
      var queryStr = "insert into messages(text, userid, roomname)";
          queryStr = "values (?, (select id from users where username = ? limit 1), ?)"
      db.query(queryStr, params, function(err, results) {
        callback(results);
      });
    }
  },
  
  users: {
    get: function(callback) {
      var queryStr = "select * from users";
      db.query(queryStr, function(err, results) {
        callback(results);
      });
  } ,
    post: function(params, callback) {
      var queryStr= "insert into users(usernames) values(?)";
      db.query(queryStr, params, function(err, results) {
        callback(results);
      });
    }
  
  }
}
*/