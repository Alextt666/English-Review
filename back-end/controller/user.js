const UserModel = require("../models/user");
const Constant = require("../constant/status");

// 获取用户列表
function getList(req, res, next) {
  UserModel.findAll({ limit: 10 })
    .then((result) => {
      res.json(result).end();
    })
    .catch((err) => {
      console.log(err);
      res.json(Constant.ERROR).end();
    });
}

module.exports = {
  getList,
};
