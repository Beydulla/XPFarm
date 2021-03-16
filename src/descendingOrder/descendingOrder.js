const descendingOrder = (number) =>{
    if(number <= 0){
        return 0;
    }
    let digitArray = convertToArray(number);
    let sortedArray = sortArrayAscending(digitArray);

    return Number(sortedArray.join(''))

};
const sortArrayAscending = (digitArray) => {
    return digitArray.sort((a, b) => { return b - a; })
}

const convertToArray = (number) => {
   return Array.from(String(number), Number);

}


module.exports = {
    descendingOrder,
    convertToArray,
    sortArrayAscending
}