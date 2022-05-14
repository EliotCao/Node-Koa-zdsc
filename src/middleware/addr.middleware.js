const {addrFormatError} = require('../constant/err.type')

const validator = (rules) => {
    return async (ctx, next) => {
        try {
            await ctx.verifyParams(rules)
        }catch (err) {
            console.error(err)
            addrFormatError.result = err
            ctx.emit('error', addrFormatError, ctx)
        }
    }
}

module.exports = {
    validator
}