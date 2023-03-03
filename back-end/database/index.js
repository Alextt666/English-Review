const {Sequelize} = require('sequelize');

const sq = new Sequelize('enlish','root','123456',{
    host:'localhost',
    dialect:'mysql',
    define:{
        timestamps:false
    }
});



module.exports = sq;