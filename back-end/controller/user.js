const UserModel = require("../models/user");
const Constant = require("../constant/status");

// 查询基础模板
function baseFind(config, res) {
  UserModel.findAll(config)
    .then((result) => {
      res.json(result).end();
    })
    .catch((err) => {
      throw new Error(err);
    });
}

// 获取用户列表
function getAllList(req, res, next) {
  let { limit } = req.query;
  if (limit) {
    baseFind({ limit: +limit }, res);
  }
}
// 查询指定用户
function getByName(req, res, next) {
  const { name } = req.params;
  if (typeof name === 'string') {
    config = {
      where: {
        name,
      },
    };
    baseFind(config, res);
  } 
  else {
    res.json(Constant.ERROR).end();
  }
}

const controlUser = {
  getAllList,
  getByName,
};

module.exports = controlUser;
