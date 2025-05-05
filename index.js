const express = require('express')
const app = express()
const port = 3030

// 1. use 中间件

// 使用app.use() 方法将中间件提供给Express调用
// use() 方法的第一个参数默认是/, 可以省略
// use() 方法可以匹配所有的HTTP方法
// use() 方法匹配路径的规则为: 从头包含匹配
// 可以给同一个路径注册多个中间件函数
// 可以在一个use()方法中注册多个中间件函数

app.use((req, res, next) => {
    console.log('中间件1')
    next()
})
app.use('/', (req, res, next) => {
    console.log('中间件2')
    next()
})
app.use('/', (req, res, next) => {
    console.log('中间件3')
    next()
})
app.use('/user', (req, res, next) => {
    console.log('中间件4')
    res.send('匹配结束')
})

app.listen(port, () => {
    console.log(`Server starts at PORT${port} SUCCESSFULLY`)
})