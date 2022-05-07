const Koa = require('koa');
const {APP_PORT} = require('./config/config.default')
const app = new Koa();

// response
app.use(ctx => {
    ctx.body = 'Hello Koa';
});

app.listen(APP_PORT, () => {
    console.log(`Server is running on http://localhost:${APP_PORT}`)
});