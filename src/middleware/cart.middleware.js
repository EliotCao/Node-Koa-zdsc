const {invalidGoodsID, cartFormatError} = require('../constant/err.type')

const validator = (rules) => {
    return async (ctx, next) => {
        try {
            ctx.verifyParams(rules)
        }catch (err) {
            console.error(err)
            cartFormatError.result = err
            return ctx.app.emit('error', cartFormatError, ctx)
        }
    }
}

/*    async (ctx, next) => {
    try {
        ctx.verifyParams({
            goods_id: 'number',
        })
    }catch (err){
        console.error(err)
        invalidGoodsID.result = err
        return ctx.app.emit('error',invalidGoodsID, ctx)
    }

    await next()
}*/

module.exports = {
    validator
}