const express = require('express')
const app = express()
const port = 3030

// 1.处理请求体中 application/x-www-form-urlencoded 格式的数据
// express.urlencoded()
// extended 必须传
// extended: false 表示内部使用querystring模块, 推荐
// extended: true 表示内部使用qs模块
// qs 模块可以解析更复杂的字符串,在这里没有必要

app.use(express.urlencoded({extended: false}))

// 2. 处理请求体中application/json格式的数据
// express.json

app.use(express.json())

// 3. 提供静态资源
const path = require('path')
// express.static(path)
app.use(express.static(path.join(__dirname, 'public')))

app.post('/user', (req, res) => {
    console.log(req.body)
})

app.listen(port, ()=>{
    console.log(`服务器在${port}端口启动成功`)
})