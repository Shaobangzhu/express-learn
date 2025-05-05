// App级中间件的应用:
// 1. 处理请求体中 application/x-www-form-urlencoded 格式的数据
// username=clu&gender=male

const querystring = require("node:querystring");

module.exports = () => {
  return (req, res, next) => {
    if (req.header("Content-Type") !== "application/x-www-form-urlencoded") {
      return next();
    }

    const results = [];

    req.on("data", (chunk) => {
      results.push(chunk);
    });
    req.on("end", () => {
      const data = Buffer.concat(results).toString();
      console.log(querystring.parse(data), "中间件");
      req.body = querystring.parse(data);
      next();
    });
  };
};