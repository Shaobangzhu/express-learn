const express = require('express')
const app = express()
const port = 3030

// 1.什么是错误处理中间件
// (err, req, res, next) => {}
// 专门处理错误的中间件
// 有4个参数: err, req, res, next
// 这4个参数必写, 即使不用也不能省略,因为源码中是通过参数个数是不是4来判断这是个什么中间件,是4的话，就是错误处理中间件

// 2. 如何将错误传递给错误处理中间件
// 在出错的地方, 调用next(错误或错误信息)把错误传递给错误处理中间件
// next('route')会跳到下一个路由, 不会把错误传递给错误处理中间件

const userRouter = require('./router/user')

app.use("/user", userRouter)

app.use((err, req, res, next) => {
    // console.log(err.message)
    res.status(401).send({
        msg:err.message,
        code: 1001
    })
})

app.listen(port, () => {
    console.log(`服务器在${port}端口启动成功`)
})