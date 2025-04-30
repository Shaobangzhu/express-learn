// 1. 使用Express搭建Web服务器
const express = require('express')

const app = express()
const port = 3030

// 通过 get 请求访问路径
app.get('/', (req, res) => {
    res.send('Hi CLU 2025')
})

// 通过 post 请求登录
app.post('/login', (req, res) => {
    res.send('LOGIN SUCCESS')
})

// 在指定的端口启动服务器
app.listen(port, () => {
    console.log(`Server starts at port ${port} successfully!`)
})

// 2.使用nodemon自动重启服务器 npm install -g nodemon
