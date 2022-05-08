const {getUserInfo} = require('../service/user.service')
const {userFormatError, userAlreadyExist, userRegisterError} = require('../constant/err.type')

const userValidator = async (ctx, next) => {
    const {username, password} = ctx.request.body
    //合理性
    if (!username || !password){
        console.error('用户名或密码为空', ctx.request.body)
        ctx.app.emit('error', userFormatError, ctx)
        return
    }

    await next()
}

const verifyUser = async (ctx, next) => {
    const {username} = ctx.request.body
    //合法性
    try {
        const res = await getUserInfo({username})
        if (res) {
            console.error('用户名已存在', {username})
            ctx.app.emit('error', userAlreadyExist, ctx)
        }
    }catch (err) {
        console.error('获取用户信息错误', err)
        ctx.app.emit('error', userRegisterError, ctx)
        return
    }

    await next()
}

module.exports = {
    userValidator,
    verifyUser,
}