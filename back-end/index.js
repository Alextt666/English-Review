const express = require("express");
const app = express();
const port = 2020;
const path = require("path");
const baseuser = require("./controller/user");
const words = require("./controller/words");
const cors = require("cors");

app.use(cors());

// 内置中间件 express.static 返回静态文件
app.use("/static", express.static(path.join(__dirname, "public")));
// 内置中间件 json包裹和解析
app.use(express.json());

const users = [
  { id: 1, name: "alex" },
  { id: 2, name: "miki" },
  { id: 3, name: "11" },
];

app.get("/api/baseusers", baseuser.getAllList);
app.get("/api/alex", baseuser.getByName);

// 查询所有单词

app.get("/api/words", words.getList);

// 直接获取所有用户
app.get("/api/users", (req, res) => {
  res.json(users).end();
});

// 获取指定Id 用户
app.get("/api/users/:id", (req, res) => {
  let user = users.find((item) => item.id === parseInt(req.params.id));
  if (!user)
    return res
      .status(404)
      .json({ msg: "This user is not find! Please check!" });
  res.json(user).end();
});
// post 添加用户
app.post("/api/users", (req, res) => {
  // error 校验 略
  if (error)
    return res
      .status(400)
      .json({ msg: "invalid userName! Please check !" })
      .end();
  const user = {
    id: users.length + 1,
    name: req.body.name,
  };
  try {
    users.push(user);
    res.json(user).end();
  } catch (error) {
    res.status(400).json({ msg: "push has some error" + error });
  }
});

//使用PUT方法修改
app.put("/api/users/:id", (req, res) => {
  let user = users.find((b) => b.id === parseInt(req.params.id));
  if (!user)
    return res
      .status(404)
      .json({ msg: "The user with the given ID not find." });

  const { error } = validateuser(req.body);
  if (error)
    return res.status(400).json({ msg: error.details[0].message }).end();

  user.name = req.body.name;
  res.json(user).end();
});
//使用DELETE方法删除
app.delete("/api/users/:id", (req, res) => {
  let user = users.find((b) => b.id === parseInt(req.params.id));
  if (!user)
    return res
      .status(404)
      .json({ msg: "The user with the given ID not find." });

  const index = users.indexOf(user);
  users.splice(index, 1);

  res.json(user).end();
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Expample app is listening on port ${port}`);
});
