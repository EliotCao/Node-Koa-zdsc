const Koa = require('koa')

const userRouter = require('../router/user.route')

const app = new Koa()

// app.use(userRouter.routes())

// module.exports = app
// module.exports = app

app.use(userRouter.routes())

module.exports = app