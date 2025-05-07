const express = require('express')
const app = express()
const port = 3030

// 1. 在响应中设置cookie
// Set-Cookie
app.get('/cookie', (req, res)=> {
    res.cookie('username', 'clu', {
        maxAge: 30000
    })
    res.send('Hi Express')
})

// 2.清除Cookie
app.get('/clearCookie', (req, res) => {
    res.clearCookie('username')
    res.send('Cookie Cleared')
})

// 3.打印Cookie
// app.get('/', (req, res) => {
//     console.log(req.get('cookie'))
//     res.send('打印Cookie')
// })

// 4.使用第三方中间件cookie-parser处理请求中的cookie
const cookieParser = require('cookie-parser')
app.use(cookieParser())

app.get('/', (req, res)=>{
    console.log(req.cookies)
    res.send('Print Cookies using cookie-parser')
})

app.listen(port, ()=>{
    console.log(`服务器在${port}端口启动成功`)
})