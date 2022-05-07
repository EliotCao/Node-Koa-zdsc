const {createUser} = require('../service/user.service')

class UserController{
    async register(ctx, next){
        //1.Get data
        console.log(ctx.request.body)
        //2.operate DB
        const {username, password} = ctx.request.body
        const res = await createUser(username, password)
        console.log(res)
        //3.response
        ctx.body = ctx.request.body
    }
    async login(ctx, next){
        ctx.body = 'login success'
    }
}

module.exports = new UserController()