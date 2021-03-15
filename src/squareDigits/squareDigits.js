const squareDigits = (num) => {
    if(typeof num !== 'number' || num <= 0 || parseInt(num) !== num){
        return 0;
    }

    let output = '';
    const digitArray = toDigitArray(num);
    const digitArrayLength =digitArray.length;
    for(let i = 0; i < digitArrayLength; i++){
        output += digitArray[i] ** 2;
    }
    return Number(output);
}

const toDigitArray = (number) =>{
    return Array.from(String(number), Number);
}

module.exports = {
    squareDigits,
    toDigitArray
}