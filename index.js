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

// app.use((req, res, next) => {
//     console.log('中间件1')
//     next()
// })
// app.use('/', (req, res, next) => {
//     console.log('中间件2')
//     next()
// })
// app.use('/', (req, res, next) => {
//     console.log('中间件3')
//     next()
// })
// app.use('/user', (req, res, next) => {
//     console.log('中间件4')
//     res.send('匹配结束')
// })

// 2. METHOD和all中间件: 使用app.METHOD()或app.all()方法将中间件提供给Express调用
// app.METHOD() 具体指: app.get(), app.post(), app.put(), app.delete()等
// METHOD()或all()方法第一个参数一般都要写出来的, 不会省略
// METHOD()方法会匹配对应的HTTP方法, all()方法会匹配所有的HTTP方法
// METHOD()或all()方法匹配路径的规则为: 路径相等匹配
// 可以给同一个路径注册多个中间件函数
// 可以在一个METHOD()或all()方法中注册多个中间件函数

app.get('/', (req, res, next) => {
    console.log('中间件1')
    next()
})

app.get('/', (req, res, next) => {
    console.log('中间件2')
    next()
})

app.post('/', (req, res, next) => {
    console.log('中间件3')
    next()
})

app.get('/user', (req, res, next) => {
    console.log('中间件4')
    next()
})

app.all('/', (req, res, next) => {
    console.log('中间件5')
    res.send('匹配结束')    
})

app.listen(port, () => {
    console.log(`Server starts at PORT${port} SUCCESSFULLY`)
})