const { User } = require('../models');
const bcrypt = require('bcrypt');

const signupController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ 
        where: { 
          email: email
        }, 
        include: ['bed']
      })
      const validPassword = bcrypt.compare(password, user.password)
      if(!user) {
      return res.status(403).send({ 
          error: 'User not found'
        })
      }
      if(!validPassword) {
        return res.status(403).send({ 
          error: 'Password is incorrect'
        });
      };
      const userFind = user;
      res.json({
        success: true,
        user: userFind,
      });
    }
    catch (err) {
      res.status(500).send({ error: 'An error occurred while trying to login'})
    };
  },

  signup : async (req, res) => {
    try {
      const { email, password, first_name, last_name, role} = req.body
      console.log(req.body)
      const saltRounds = 10
      const passwordHash = bcrypt.hash(password, saltRounds, function(err, hash) {
        const user = User.create({
          email: email,
          password: hash,
          first_name: first_name,
          last_name: last_name,
          role: role
        })
        const userCreate = user;
        res.json({ 
          success: true,
          userCreate
        })
      })
    }
    catch {
      res.status(400).send({ 
        error: 'this email does not exist'
      })
    }
  },
}

module.exports = signupController;
