const sumOfDigits = (digits) => {
    if(typeof digits === 'undefined' || digits < 0){
        return '';
    }
    const digitArray = convertToDigitArray(digits);
    const allSums = sumsForAll(digitArray);
    const sumOfAllDigits = sumOfArrayDigits(digitArray);
    return `${allSums} = ${sumOfAllDigits}`;

}

const convertToDigitArray = (digits) => {
    return Array.from(String(digits), Number);
}

const sumsForAll = (digitsArray) => {
    let output = '' + digitsArray[0];
    for(let i = 1; i < digitsArray.length; i ++){
        output +=  " + " + digitsArray[i];
    }
    return output;
}

const sumOfArrayDigits = (digitArray) => {
    return digitArray.reduce((a, b) => a + b, 0)
}

module.exports = {
    sumOfDigits,
    convertToDigitArray,
    sumsForAll,
    sumOfArrayDigits
}