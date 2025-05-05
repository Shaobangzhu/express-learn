// App级中间件的应用:
// 2. 处理请求体中 application/json 格式的数据

const express = require("express");
const app = express();
const port = 3030;

// 1. 处理请求体中 application/x-www-form-urlencoded 格式的数据
// username=clu&gender=male

app.use((req, res, next) => {
  if (req.header("Content-Type") !== "application/x-www-form-urlencoded") {
    return next();
  }

  const results = [];

  req.on("data", (chunk) => {
    results.push(chunk);
  });
  req.on("end", () => {
    const data = Buffer.concat(results).toString();
    const result = {};
    data.split("&").forEach((item) => {
      result[item.split("=")[0]] = item.split("=")[1];
    });
    req.body = result;
    next();
  });
});

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("请求完成");
});

app.listen(port, () => {
  console.log(`服务器在${port}端口启动成功`);
});
