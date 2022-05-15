const Order = require('../model/order.model')

class OrderService {
    async createOrder(order) {
        return await Order.creat(order)
    }
}

module.exports = new OrderService()