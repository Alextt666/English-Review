const UserModel = require("../models/user");
const Constant = require("../constant/status");


// 查询基础模板
function baseFind(config, res) {
  UserModel.findAll(config)
    .then((result) => {
      res.json(result).end();
    })
    .catch((err) => {
      console.log(err);
      res.json(Constant.ERROR).end();
    });
}

// 获取用户列表
function getAllList(req, res, next) {
  baseFind({ limit: 10 }, res);
}
// 查询指定用户
function getByName(req, res, next) {
  baseFind({
    where: {
      name: "alex",
    },
  },res);
}

const controlUser = {
  getAllList,
  getByName,
};

module.exports = controlUser;
