const {getUserInfo} = require('../service/user.service')
const {userFormatError, userAlreadyExist} = require('../constant/err.type')

const userValidator = async (ctx, next) => {
    const {username, password} = ctx.request.body
    //合理性
    if (!username || !password){
        console.error('用户名或密码为空', ctx.request.body)
        /*ctx.status = 400
        ctx.body = {
            code: '1000',
            message: '用户名或密码为空',
            result: ''
        }*/
        ctx.app.emit('error', userFormatError, ctx)
        return
    }

    await next()
}

const verifyUser = async (ctx, next) => {
    const {username} = ctx.request.body
    //合法性
    if (await getUserInfo({username})) {
        /*ctx.status = 409
        ctx.body = {
            code: '10002',
            message: '用户名已存在',
            result: ''
        }*/
        ctx.app.emit('error', verifyUser, ctx)
        return
    }

    await next()
}

module.exports = {
    userValidator,
    verifyUser,
}