const UserModel = require("../models/user");
const Constant = require("../constant/status");

// 查询基础模板
function baseFind(config, res) {
  UserModel.findAll(config)
    .then((result) => {
      if (result.length != 0) {
        res.json(result).end();
      } else {
        res.json(Constant.NONE).end();
      }
    })
    .catch((err) => {
      throw new Error(err);
    });
}

// 获取用户列表 query limit
function getUserList(req, res, next) {
  let { limit } = req.query;
  if (limit) {
    baseFind({ limit: +limit }, res);
  } else {
    res.json(Constant.LACK).end();
  }
}
// 获取指定Name用户
function getUserByName(req, res, next) {
  const { name } = req.params;
  if (typeof name === "string") {
    config = {
      where: {
        name,
      },
    };
    baseFind(config, res);
  } else {
    res.json(Constant.ERROR).end();
  }
}
// 获取指定id 用户
function getUserById(req, res, next) {
  const { id } = req.params;
  if (id) {
    baseFind({ id: +id }, res);
  } else {
    res.json(Constant.LACK).end();
  }
}
// 添加用户
function addUser(req, res, next) {
  const { name } = req.body.name;
  if (name) {
    UserModel.findOrCreate({
      where: { name },
      defaults: {
        age: 18,
      },
    })
      .then((result) => {
        res.json(result).end();
      })
      .catch((err) => {
        res.json(Constant.ERROR).end();
        throw new Error(err);
      });
  } else {
    res.json(Constant.LACK).end();
  }
}
// 更改用户信息
function putUser(req, res, next) {
  const { name, age } = req.body;

  if (name && age) {
    UserModel.update(
      { age },
      {
        where: {
          name,
        },
      }
    )
      .then((result) => {
        res.json(result).end();
      })
      .catch((err) => {
        res.json(Constant.ERROR).end();
      });
  }
}
// 删除用户
function deleteUser(req, res, next) {
  const { name } = req.body;
  if (name) {
    UserModel.destroy({
      where: {
        name,
      },
    })
      .then((result) => {
        res.json(result).end();
      })
      .catch((err) => {
        res.json(Constant.ERROR).end();
        throw new Error(err);
      });
  }
}

const controlUser = {
  getUserList,
  getUserByName,
  getUserById,
  addUser,
  putUser,
  deleteUser,
};

module.exports = controlUser;
