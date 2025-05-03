// 1. 什么是路由
// 客户端使用特定的HTTP方法 (GET, POST, PUT, DELETE等) 对特定路径 (/, /login等) 
// 发送请求, 应用程序要如何响应

// 2. 基础路由

const express = require('express')

const app = express()
const port = 3030

// 这就是一个路由
app.get('/', (req, res)=>{
    res.send('Hi Express')
})

// 用户登录
app.post('/user/login', (req, res)=>{
    res.send('Login SUCCESS')
})

// 用户注册
app.post('/user/register', (req, res)=>{
    res.send('Register SUCCESS')
})

// 发送评论
app.post('/user/comment', (req, res)=>{
    res.send('Post a Comment SUCCESS')
})

// 更新评论
app.put('/user/comment', (req, res)=>{
    res.send('Update a Comment SUCCESS')
})

// 删除评论
app.delete('/user/comment', (req, res)=>{
    res.send('Delete a Comment SUCCESS')
})

// 获取评论
app.get('/user/comment', (req, res)=>{
    res.send('Get a Comment SUCCESS')
})

app.listen(port, () => {
    console.log(`Server starts at ${port} SUCCESSFULLY`)
})