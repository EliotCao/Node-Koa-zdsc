const Address = require('../model/addr.model')

class AddrService {
    async createAddr(addr) {
        return await Address.creat(addr)
    }
}

module.exports = new AddrService()