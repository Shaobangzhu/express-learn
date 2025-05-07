const express = require("express");
const app = express();
const port = 3030;

// 1. use 中间件
// 使用router.use()方法将中间件提供给Express应用
// use() 方法的第一个参数默认就是/，可以省略
// use() 方法可以匹配所有的HTTP方法
// use() 方法匹配路径的规则为: 从头包含匹配
// 可以给同一个路径注册多个中间件函数
// 可以在一个use()方法中注册多个中间件函数

// router.use((req, res, next) => {
//     console.log('中间件1')
//     next()
// })

// router.use('/', (req, res, next) => {
//     console.log('中间件2')
//     next()
// })

// router.use('/', (req, res, next) => {
//     console.log('中间件3')
//     next()
// })

// router.use('/user', (req, res, next) => {
//     console.log('中间件4')
//     res.send('请求成功!')
// })

// 2. METHOD和all中间件
// 使用router.METHOD() 或 router.all()方法将中间件提供给Express调用
// router.METHOD()具体指: router.get(), router.post(), router.put(), router.delete()等
// METHOD()或all()方法第一个参数一般都要写出来,不会省略
// METHOD()方法会匹配对应的HTTP方法, all()方法会匹配所有HTTP方法
// METHOD()或all()方法匹配路径的规则为: 路径相等匹配
// 可以给同一个路径注册多个中间件函数
// 可以在一个METHOD()或all()方法中注册多个中间件函数
// 可以通过next('route')跳到下一个路由
// next('route')只会在METHOD()或all()中起作用

// router.get(
//   "/",
//   (req, res, next) => {
//     console.log("中间件1");
//     next('router');
//   },
//   (req, res, next) => {
//     console.log("中间件2");
//     next()
//   }
// )

// router.post('/user', (req, res, next)=>{
//   console.log('中间件3')
//   next()
// })

// router.get('/', (req, res, next)=>{
//     console.log('中间件4')
//     res.send('next router请求成功')
// })

// app.use("/", router);

// 3. Router级中间件的应用
// 注册
// /user/register
// /user/login
const userRouter = require('./router/user')
app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`服务器在${port}端口启动成功`);
});
