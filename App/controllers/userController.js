const { User } = require('../models');
const bcrypt = require('bcrypt');

const userController = {
  getAllUsers: (req, res) => {
    User.findAll({})
    .then(users => {
      if(!users) {
        console.error('Users not found');
      }
      res.json({
        success: true,
        users
      })
    }).catch(error => {
      res.status(500).json({
        success: false,
        error: error.message
      });
    });
  },

  getUserById: (req, res) => {
    const userId = req.params.id;
    User.findByPk(userId, {
      include:['bed']
    }).then(user => {
      if(!user || user === null) {
        res.status(404).json({success: false, error:'User not found'});
      } else {
      res.json({
        success: true,
        user
      })
    }
    }).catch(error => {
      res.status(500).json({
        success: false,
        error: error.message
      });
    });
  
  },

  updateUser: (req,res) => {
    const userData = req.body;
    console.log(userData);
    const userId = req.params.id;
    if(userData.password) {
      const saltRounds = 10
      const passwordHash = bcrypt.hash(userData.password, saltRounds, function(err, hash) {
        User.findByPk(userId).then(user => {
          if(!user) {console.log('User not found');}
          return user.update({password:hash});
        }).then(user => {
          res.json({
            success: true,
            user
          });
        })
        .catch(error => {
          res.status(500).json({
            success: false,
            error: error.message
          });
        });
      })
    } else {
      User.findByPk(userId)
      .then( user => {
        if(!user) {console.log('User not found');}
        return user.update(userData);
      })
      .then(user => {
        res.json({
          success: true,
          user
        });
      })
      .catch(error => {
        res.status(500).json({
          success: false,
          error: error.message
        });
      });
    }
  },  

  deleteUser: (req,res) => {
    const userId = req.params.id;
    User.findByPk(userId).then(user => {
      if(!user) {console.log('User not found');}
      return user.destroy();
    })
    .then(()=> {
      res.json({
        success: true
      })
    })
    .catch(error => {res.status(500).json({
      success: false,
      error: error.message
    })});
  },
}

module.exports = userController;