import axios from "axios";
// 域名
// const base_rul = 'https://gateway.classkid.net';
const base_rul = "http://127.0.0.1:2020";
// 请求超时时间
const timeout = 10000;

// 暴露请求函数
const request = function (url, method='get', params = "", data) {
  // 请求头
  let newHeader = {
    "Content-Type": "application/json",
    charset: "UTF-8",
  };
  if(method == 'post'){
    newHeader = {
        "Content-Type": "multipart/form-data",
    charset: "UTF-8",
    } 
  }
  return new Promise((resolve, reject) => {
    // 执行方法
    axios({
      method,
      url: base_rul + url,
      timeout,
      data,
      params,
      headers: newHeader,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export default request;
