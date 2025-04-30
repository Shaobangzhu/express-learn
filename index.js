const path = require("path");
const express = require("express");

const app = express();
const port = 3030;

app.get("/", (req, res) => {
  // 属性
  // console.log(res.app === app, res.req === req)
  // 方法
  // 发送数据(send方法里面封装了node的end响应周期)
  // res.send('<h1>Hi Express</h1>')
  //   res.json([
  //     {
  //       id: 1,
  //       username: "clu1json",
  //     },
  //     {
  //       id: 2,
  //       username: "clu2json",
  //     },
  //   ]);
  // 发送文件 (静态文件)
  //   console.log(path.join(__dirname, 'public', 'index.html'))
  //   res.sendFile(path.join(__dirname, 'public', 'index.html'))
  // 状态码
  //   res.sendStatus(404)
  //   res.status(404).send("Could Not Find the Webpage");

  // 响应头
  res.set({
    'Content-Type':'text/plain; charset=utf-8',
    'Access-Control-Allow-Origin':'*'
})
  res.send('<h1>Hi Express</h1>')
});

app.listen(port, () => {
  console.log("SERVER starts at Port: ${port} SUCCESS");
});
