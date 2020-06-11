const Sequelize = require('sequelize')
const db = require('../db')

const Subject = db.define('subject', {
  Name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Image: {
    type: Sequelize.STRING,
    allowNull: false
  }
  //   Question: {
  //     type: Sequelize.ARRAY(Sequelize.STRING),
  //     allowNull: false
  //   }
})

module.exports = Subject
