const { getAllOrders, getOrderById } = require('./services/order.js')


const orders = getAllOrders()


function getLastStatus(orderId) {

    const order = getOrderById(orderId)

    const status = order.status

    for (let i = 0; i < status.length; i++) {
        
        let lastStatus = status[i]

        if (lastStatus.date < status[i].date) {
            lastStatus = status[i]
        }
    }

    console.log(lastStatus)
}
//const myOrder = getOrderById(12234555)


getLastStatus(12234555)