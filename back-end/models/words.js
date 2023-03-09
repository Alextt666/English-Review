const Sequelize = require('sequelize');
// 数据库实例
const db = require('../database/index');
const Word = db.define('words',{
    id:{type: Sequelize.INTEGER,primaryKey:true,allowNull:false,autoIncrement:true},
    en:{type:Sequelize.STRING,allowNull:true},
    cn:{type:Sequelize.STRING,allowNull:true},
    example:{type:Sequelize.JSON,allowNull:true}
});
module.exports = Word