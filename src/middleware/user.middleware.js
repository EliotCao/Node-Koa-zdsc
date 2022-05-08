const bcrypt = require('bcryptjs')
const {getUserInfo} = require('../service/user.service')
const {
    userFormatError,
    userAlreadyExist,
    userRegisterError,
    userNotExist,
    userLoginError,
    userInvalidPassword
} = require('../constant/err.type')

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

const cryptPassword = async (ctx, next) => {
    const {password} = ctx.request.body
    const salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("B4c0/\/", salt);
    ctx.request.body.password = hash

    await next()
}

const verifyLogin = async (ctx, next) => {
    //1.判断用户是否存在
    const {username, password} = ctx.request.body

    try {
        const res = await getUserInfo({username})
        if (!res) {
            console.error('用户名不存在', {username})
            ctx.app.emit('error', userNotExist, ctx)
            return
        }

        //2.密码是否匹配
        if (!bcrypt.compareSync(password, res.password)) {
            ctx.app.emit('error', userInvalidPassword, ctx)
            return
        }
    }catch (err) {
        console.error(err)
        return ctx.app.emit('error', userLoginError, ctx)
    }

    await next()
}

module.exports = {
    userValidator,
    verifyUser,
    cryptPassword,
    verifyLogin
}