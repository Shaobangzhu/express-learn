// 安装ejs模板引擎

const path = require("path")
const express = require("express")

const app = express()
const port = 3030

// /user/1
app.get("/user/:id", (req, res) => {
  const { id } = req.params

  // 设置模板所在目录,默认是views
  app.set('views', path.join(__dirname, 'view'))

  // 设置默认的模板后缀名,省略不写的时候有用
  app.set('view engine', 'html')

  // 设置指定后缀名的文件使用什么模板引擎
  app.engine('html', require('ejs').__express)

  // 使用res.render() 渲染模板
  res.render("user", {
    id,
    title:`用户${id}的首页`,
    html: '<h1>我是HTML字符串</h1>',
    user:[
      {
        username: 'clu',
        gender: 'male'
      },
      {
        username: 'clu2',
        gender: 'female'
      }
    ]
  });
});

app.listen(port, () => {
  console.log(`Server starts at Port ${port} Successfully`);
});
