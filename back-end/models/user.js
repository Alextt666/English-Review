const Sequelize = require('sequelize')
const db = require('../database/index.js')
// 定义model
const User = db.define('users', {
  // primaryKey:是否为主键 allowNull是否允许为空  autoIncrement 是否 自增
  id: {type: Sequelize.INTEGER, primaryKey: true, allowNull: false,autoIncrement:true},
  name: {type: Sequelize.STRING(20), allowNull: true},
  age: {type: Sequelize.INTEGER(2), allowNull: true},
})

module.exports = User