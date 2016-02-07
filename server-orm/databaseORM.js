/////////////////////// ORM \\\\\\\\\\\\\\\\\\\\\\\\\\\

var Sequelize = require('Sequelize');
var orm = new Sequelize('chat', 'root', '');

var User = orm.define('User', {
  username: Sequlize.STRING;
});

var Message = orm.define('Message', {
  text: Sequelize.STRING,
  roomname: Sequlize.STRING
});

User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();
exports.User = User;
exports.Message = Message;





/////////////////////// STRICT MySQL \\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
var mysql = require('mysql');

var connection = mysql.createConnection( {
  user: 'root',
  password: '',
  database: 'chat'
});

connection.connect();

module.exports = connection; 
*/