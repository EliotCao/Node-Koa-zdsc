const {orderFormatError} = require('../constant/err.type')

const validator = (relus) => {
    return async (ctx, next) => {
        try {
            await ctx.verifyParams(relus)
        }catch (err) {
            console.error(err)
            orderFormatError.result = err
            return ctx.emit('error', orderFormatError, ctx)
        }

        await next()
    }
}

module.exports = {
    validator
}