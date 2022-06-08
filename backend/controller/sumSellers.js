import { sign } from 'crypto';
import * as fs from 'fs';

function sumSeller() {
    let orders = JSON.parse(fs.readFileSync('../model/orders.json'));
    
    let sum1 = 0
    let sum2 = 0
    let sum3 = 0
    let sum_total = 0

     orders.forEach(order => {
         if (order.seller == '1') {
             sum1 += order.price
         } else if (order.seller == '2') {
             sum2 += order.price
         } else if (order.seller == '3') {
             sum3 += order.price
         } 
    
    });
    let sum = {
        sum_1: sum1,
        sum_2: sum2,
        sum_3: sum3,
        sum_total: sum1 + sum2 + sum3
    }
    return sum
}

console.log(sumSeller())