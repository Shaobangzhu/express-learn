const express = require("express");
const router = express.Router();

// 1.数据校验
const validate = (req, res, next) => {
  if (false) {
    console.log("数据校验通过");
    next();
  } else {
    // 报错
    next(new Error('用户名必填'))
  }
};

// 2.用户名不能已经存在
const userMustNotExist = (req, res, next) => {
  if (true) {
    console.log("用户不存在");
    next();
  } else {
    console.log("ERROR");
  }
};

// 3. 密码加密
const encryptPassword = (req, res, next) => {
  console.log("密码已加密");
  next();
};

// 4. 将数据写入数据库, 注册成功, 响应数据给客户端
const register = (req, res, next) => {
  console.log("可以注册");
  res.send("注册成功");
};

// 注册
router.post("/register", validate, userMustNotExist, encryptPassword, register);

module.exports = router;