const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}
module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send({
        register: true,
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      console.log(req.body)
      res.status(400).send({
        error: 'This email is already registered to another user'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'Login information incorrect'
        })
      }

      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Password Invalid'
        })
      }
      const userJson = user.toJSON()
      res.send({
        login: true,
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      console.log(req.body)
      res.status(500).send({
        error: 'Error has occured trying to log in'
      })
    }
  }
}
