const express = require("express");
const app = express();
const port = 2020;
const path = require("path");
const user = require("./controller/user");
const words = require("./controller/words");
const cors = require("cors");

app.use(cors());

// 内置中间件 express.static 返回静态文件
app.use("/static", express.static(path.join(__dirname, "public")));
// 内置中间件 json包裹和解析
app.use(express.json());
// 查询所有单词
app.get("/api/words", words.getList);
// 直接获取所有用户
app.get("/api/users", user.getUserList);
// 获取指定名字用户
app.get("/api/users/:name", user.getUserByName);
// post 添加用户
app.post("/api/users", user.addUser);
//使用PUT方法修改
app.put("/api/users", user.putUser);
//使用DELETE方法删除
app.delete("/api/users", user.deleteUser);

app.get("/", (req, res) => {
  res.send("Hello world");
});


// 错误捕获
app.use(function (err, req, res, next) {
  console.log(err.message);
});


app.listen(port, () => {
  console.log(`Expample app is listening on port ${port}`);
});
