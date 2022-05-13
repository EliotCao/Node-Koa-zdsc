const path = require('path')

const Koa = require('koa')
const KoaBody = require('koa-body')
const KoaStatic = require('koa-static')
const KoaParameter = require('koa-parameter')

const errHandler = require('./errHandler');
const router = require('../router/index')

const app = new Koa()

// console.log(process.cwd())
app.use(KoaBody({
    multipart: true,
    formidable: {
        // 配置选项里，不推荐使用相对路径
        // 在option里的相对路径，不是相对当前问渐渐，相对process.cwd()
        uploadDir: path.join(__dirname, '../uploads'),
        keepExtensions: true
    },
    parsedMethods: ['POST', 'PUT', 'PATCH','DELETE']
}))
app.use(KoaParameter(app))

app.use(KoaStatic(path.join(__dirname, '../uploads')))
app.use(router.routes())
app.use(router.allowedMethods())

//统一的错误处理
app.on('error', errHandler)

module.exports = app