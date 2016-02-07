/////////////////////// ORM SEQUELIZE \\\\\\\\\\\\\\\\\\\\\\\\\\\

var userFields = ['username'];
var messageFields = ['message', 'username', 'roomname'];

module.exports = module.exports = {
  messages: {
    get: function(req, res) {
      
      Message.findAll({include: [User]}) // performs left outer join by default
        .then(function(err, results) {
          // TO DO: handle err
          res.json(results);
        });
    },
    post: function(req, res) {
      User.findOrCreate({username: req.body[username]})
        .then(function(err, user) {        
          var params = {
            text: req.body[text], 
            username: user.id, 
            roomname: req.body[roomname]
          };
      });
      Message.create(params)
        .then(function(err, results) {
          res.sendStatus(200);
        })
    
    }
  },
  
  users: {
    get: function(req, res) {
      User.findAll() 
        .then(function(err, results) {
          // TO DO: handle err
          res.json(results);
        });
    },
    post: function(req, res) {
      User.findOrCreate({username: req.body[username]})
        .then(function(err, user) {
          res.sendStatus(201);        
        }
    )}
  
  }
}
/////////////////////// STRICT MySQL \\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
var models = require('../models');
var bluebirds = require('bluebird');

var userFields = ['username'];
var messageFields = ['message', 'username', 'roomname'];

module.exports = module.exports = {
  messages: {
    get: function(req, res) {
      models.messages.post(function(err, results) {
        // TO DO: handle err
        res.json(results);
      })
    },
    post: function(req, res) {
      var params = [req.body[text], req.body[username], req.body[roomname]]
      models.messages.post(params, function(err, results) {
        // TO DO: handle err
        res.json(results);
      });
    }
  },
  
  users: {
    get: function(req, res) {
      models.users.get(function(err, results) {
        // TO DO: handle err
        res.json(results);
      })
    },
    post: function(req, res) {
      models.users.get(function(err, results) {
        // TO DO: handle err
        res.json(results);
      })
    }
  }
  
  }
*/