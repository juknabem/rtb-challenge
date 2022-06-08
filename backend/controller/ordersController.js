import * as fs from 'fs';

function getData() {
    let sellers = JSON.parse(fs.readFileSync('../model/sellers.json'));
    let orders = JSON.parse(fs.readFileSync('../model/orders.json'));
    // exchange the seller's id for the seller's name in orders.json
     orders.forEach(order => {
        sellers.forEach(seller => {
            if (order.seller == seller.id) {
                order.seller = seller.name
            }
        })
    });
    return orders
}

export {getData as default}