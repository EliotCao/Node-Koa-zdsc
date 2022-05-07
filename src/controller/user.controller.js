class UserController{
    async register(ctx, next){
        ctx.body = 'Register success'
    }
    async login(ctx, next){
        ctx.body = 'login success'
    }
}

module.exports = new UserController()