const fs = require('fs')


function getAllOrders() {
    const orders = JSON.parse(fs.readFileSync('./data/orders.json'))
    return orders
    
}

function getOrderById(id) {
    
    const allOrders = getAllOrders()
    const order = allOrders.filter(order => order.id == id)

    return order
}

module.exports = { 
    getAllOrders,
    getOrderById 
}