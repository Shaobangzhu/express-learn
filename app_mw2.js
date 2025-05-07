const express = require("express");
const app = express();
const port = 3030;

const urlencoded = require('./middleware/urlencoded');
const appjson = require('./middleware/appjson');

// app.use(urlencoded());
app.use(appjson());

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("请求完成");
});

app.listen(port, () => {
  console.log(`服务器在${port}端口启动成功`);
});
