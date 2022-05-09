const jwt = require('jsonwebtoken')

const {JWT_SECRET} = require('../config/config.default')
const {tokenExpiredError, invalidToken} = require('../constant/err.type')

const auth = async (ctx, next) => {
    const {authorization} = ctx.request.header
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

module.exports = {
    auth
}