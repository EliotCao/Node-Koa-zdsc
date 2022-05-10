const jwt = require('jsonwebtoken')

const {JWT_SECRET} = require('../config/config.default')
const {tokenExpiredError, invalidToken, hasNotAdminPermission} = require('../constant/err.type')

const auth = async (ctx, next) => {
    const {authorization = ''} = ctx.request.header
    const token = authorization.replace('Bearer', '')
    // console.log(token)

    try {
        // user中包含了payload的信息(id, username, id_admin)
       const user = jwt.verify(token, JWT_SECRET)
    }catch (err) {
        switch (err.name) {
            case 'TokenExpiredError':
                console.log('token已过期', err)
                return ctx.app.emit('error', tokenExpiredError, ctx)
            case 'JsonWebTokenError':
                console.error('无效token', err)
                return ctx.app.emit('error', invalidToken, ctx)
        }
    }

    await next()
}

const hadAdminPermission = async (ctx, next) => {
    const {is_admin} = ctx.state.user
    if (!is_admin) {
        console.error('该用户没有管理员权限')
        return ctx.app.emit('error', hasNotAdminPermission, ctx)
    }

    await next()
}

module.exports = {
    auth,
    hadAdminPermission
}