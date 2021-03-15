
const oddOrEven = (arr) => {
    if(typeof arr == "undefined" || arr.length == 0){
        return "even";
    }
    let sum = sumOfArray(arr);
    return isValueOddOrEven(sum);


}

const isValueOddOrEven = (value) => {
    if(value % 2 == 0){
        return "even";
    }else{
        return "odd";
    }
}

const sumOfArray = (array) => {
    var sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}



module.exports = {
    oddOrEven, 
    sumOfArray, 
    isValueOddOrEven
}