const Koa = require('koa');
const Router = require('koa-router')
const {APP_PORT} = require('./config/config.default')
const userRouter = require('./router/user.route')

const app = new Koa();

// const indexRouter = new Router()
// indexRouter.get("/",(ctx, next) => {
//     ctx.body = "Hello Index"
// })
// const userRouter = new Router()
// userRouter.get("/user", (ctx, next) => {
//     ctx.body = 'Hello Users'
// })

// response
/*app.use(ctx => {
    ctx.body = 'Hello Koa';
});*/
// app.use(indexRouter.routes())
app.use(userRouter.routes())

app.listen(APP_PORT, () => {
    console.log(`Server is running on http://localhost:${APP_PORT}`)
});