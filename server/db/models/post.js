const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('post', {
  Question: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Answer: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Post
