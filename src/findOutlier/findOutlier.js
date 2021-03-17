const findOutlier = (integers) => {
    if(!Array.isArray(integers) || integers.length < 3){
        return [];
    }
    let numOfOdd = 0;
    let numOfEven = 0;
    let lastOdd = 0;
    let lastEven = 0;
    for(let i = 0; i < integers.length; i++){
        if(oddOrEven(integers[i]) === "odd"){
            lastOdd = integers[i];
            numOfOdd++;
        }else{
            lastEven = integers[i];
            numOfEven++;
        }
        if(numOfOdd > 1 && numOfEven === 1){
            return lastEven;
        } else if(numOfOdd === 1 && numOfEven > 1){
            return lastOdd;
        }
    }


}

const oddOrEven = (integer) => {
    return integer % 2 === 0 ? "even" : "odd";
}

module.exports = {
    findOutlier,
    oddOrEven
}