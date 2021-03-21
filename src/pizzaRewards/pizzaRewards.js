//https://www.codewars.com/kata/595910299197d929a10005ae/train/javascript

const pizzaRewards = (customers, minOrder, minPrice) => {
    let output = [];
    if(Object.keys(customers).length === 0 || typeof minOrder !== 'number' || typeof minPrice !== 'number'){
        return output;
    }
    for(let key in customers){
      if(hasMinOrderWithMinPrice(minOrderCount(customers[key], minPrice), minOrder)){
          output.push(key);
      }
    }
    return output;

}
const hasMinOrderWithMinPrice = (customerOrders, requiredMinOrder) => {
    return customerOrders >= requiredMinOrder;
}
const minOrderCount = (orderList, minPrice) => {
    let count = 0;
    for(let i = 0; i < orderList.length; i++){
        if(orderList[i] >= minPrice){
            count++;
        }
    }
    return count;
}

module.exports = {
    pizzaRewards,
    minOrderCount,
    hasMinOrderWithMinPrice
}
