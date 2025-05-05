const express = require('express')
const app = express()
const port = 3030

// 1. use 中间件
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
    res.send('匹配结束')
})
app.use('/user', (req, res, next) => {
    console.log('中间件4')
})

app.listen(port, () => {
    console.log(`Server starts at PORT${port} SUCCESSFULLY`)
})