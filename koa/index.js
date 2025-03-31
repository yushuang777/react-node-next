const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = "Hello World";
});

router.get("/api", (ctx) => {
  ctx.body = "Hello Api";
});

app.use(router.routes()).use(router.allowedMethods()); // 允许所有方法;
app.listen(3000);
