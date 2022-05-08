const {createUser} = require('../service/user.service')
const {userRegisterError} = require('../constant/err.type')

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
        ctx.body = 'login success'
    }
}

module.exports = new UserController()