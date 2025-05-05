// App级中间件的应用:
// 2. 处理请求体中 application/json 格式的数据

module.exports = () => {
  return (req, res, next) => {
    if (req.header("Content-Type") !== "application/json") {
      return next();
    }

    const results = [];

    req.on("data", (chunk) => {
      results.push(chunk);
    });
    req.on("end", () => {
      const data = Buffer.concat(results).toString();
      console.log(JSON.parse(data), "中间件JSON");
      req.body = JSON.parse(data);
      next();
    });
  };
};
