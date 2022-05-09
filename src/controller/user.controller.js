const jwt = require('jsonwebtoken');

const {createUser, getUserInfo, updateById} = require('../service/user.service')
const {userRegisterError} = require('../constant/err.type')
const {JWT_SECRET} = require('../config/config.default')

class UserController{
    async register(ctx, next){
        //1.Get data
        // console.log(ctx.request.body)
        const {username, password} = ctx.request.body
        //2.operate DB
        try {
            const res = await createUser(username, password)
            console.log(res)
            //3.response
            ctx.body = {
                code :0,
                message: '用户注册成功',
                result: {
                    id: res.id,
                    username: res.username
                }
            }
        }catch (err){
            console.log(err)
            ctx.app.emit('error', userRegisterError, ctx)
        }
    }

    //Login
    async login(ctx, next) {
        const {username} = ctx.request.body

        //1.获取用户信息(在token的playload中，记录id,username,is_admin)
        try {
            const {password, ...res} = await getUserInfo({username})
            ctx.body = {
                code: 0,
                message: '用户登录成功',
                result: {
                    token: jwt.sign(res, JWT_SECRET, {expiresIn: '1d'})
                }
            }
        }catch (err) {
            console.error('用户登录失败', err)
        }
    }

    //changePassword
    async changePassword(ctx, next) {
        //获取数据
        const id = ctx.state.user.id
        const password = ctx.request.body.password
        console.log(id, password)
        //2.操作数据库
        if (await updateById({id, password})) {
            ctx.body = {
                code: 0,
                message: '修改密码成功',
                result: ''
            }
        }else {
            ctx.body = {
                code: '10007',
                message: '修改密码失败',
                result: ''
            }
        }
        //3.返回结果
    }
}

module.exports = new UserController()