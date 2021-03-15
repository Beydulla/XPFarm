const toNumberArray = (stringArray) => {
    let ans = [];
    if(!Array.isArray(stringArray)){
        return  ans;
    }
    const arrayLength = stringArray.length;
    if(arrayLength === 0){
        return ans;
    }
    for(let i = 0; i < arrayLength; i++){
        ans.push(toNumber(stringArray[i]));
    }
    return ans;
}

const toNumber = (string) => {
    return Number(string);
}

module.exports = {
    toNumberArray,
    toNumber
}