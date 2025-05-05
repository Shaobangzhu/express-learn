// 3.使用 Router 管理路由.Router 拥有路由系统, 可以看作mini app.它可以帮助我们处理路由相关的操作
// 有了Router, 我们就不需要直接在app上面处理路由了, 可以分门别类得再不同的Router上处理不同的路由,
// 让我们的代码更加清晰

const express = require('express')

const app = express()
const port = 3030

const userRouter = express.Router()
const dynamicRouter = express.Router()
const commentRouter = express.Router()

// 用户登录
userRouter.post('/login', (req, res) => {
    res.send('登陆成功 userRouter')
})
// 用户注册
userRouter.post('/register', (req, res) => {
    res.send('注册成功 userRouter')
})

app.use('/user', userRouter)

app.listen(port, () => {
    console.log(`Server starts at ${port} SUCCESSFULLY`)
})