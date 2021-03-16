const divisors = (num) => {
    let output = [];
    if(num <= 0){
        return output;
    }
    output = getDivisors(num);
    if (output.length === 0) {
        output = num + " is prime";
    }
    return output;
}

const getDivisors = (number) => {
    let output = [];
    for(let i = 2; i < number; i++){
        if(number % i === 0){
            output.push(i);
        }
    }
    return output;
}

module.exports = {
    divisors,
    getDivisors
}