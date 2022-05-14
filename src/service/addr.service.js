const Address = require('../model/addr.model')

class AddrService {
    async createAddr(addr) {
        return await Address.creat(addr)
    }

    async findAllAddr(user_id) {
        return await Address.findAll({
            attributes: ['id', 'consignee', "consignee", 'phone', 'address', 'is_default'],
            where: {
                user_id
            }
        })
    }
}

module.exports = new AddrService()