const {createUser, getUserInfo} = require('../service/user.service')

class UserController{
    async register(ctx, next){
        //1.Get data
        // console.log(ctx.request.body)
        const {username, password} = ctx.request.body
        //2.operate DB
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
    }
    async login(ctx, next){
        ctx.body = 'login success'
    }
}

module.exports = new UserController()