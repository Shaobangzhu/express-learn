// 1. Request 对象的属性

// 2. Request 对象的方法

const express = require('express')

const app = express()
const port = 3030

// 通过 get 请求访问根路径
app.get('/', (req, res) => {
    console.log(req.url)
    console.log(req.path)
    console.log(req.query)

    res.send('Hi EXPRESS')
})

// 通过 get 请求访问/user
// app.get('/user/:id', (req, res) => {
app.get('/user', (req, res) => {
    // console.log(req.url)
    // console.log(req.path)
    // console.log(req.query)

    // console.log(req.method)

    // console.log(req.headers)

    // console.log(req.params)

    // 方法
    console.log(req.get('user-agent'));

    res.send('Hi /user EXPRESS')
})

// 通过 post 请求登录
app.post('/login', (req, res) => {
    res.send('LOGIN SUCCESS')
})

// 在指定的端口启动服务器
app.listen(port, () => {
    console.log(`Server starts at port ${port} successfully!`)
})