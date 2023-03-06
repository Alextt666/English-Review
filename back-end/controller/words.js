const WordModel = require('../models/words');
const Constant = require('../constant/status');

function getList(req,res,next){
    WordModel.findAll({limit:10})
    .then(result=>{
        res.json(result).end();
    })
    .catch(err=>{
        res.json(Constant.ERROR).end();
    })
};

module.exports = {
    getList
}