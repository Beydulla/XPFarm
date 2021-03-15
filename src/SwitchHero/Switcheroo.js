const switchhero = (word) => {
    if(typeof word != 'string'){
        return "";
    }
    var result = "";
    for(let i = 0; i < word.length; i++){
        result += updateLetter(word[i]);

    }
    return result;

}

const updateLetter = (letter) => {
    if(letter == "a"){
        return "b";
    }
    if(letter == "b"){
        return "a";
    }

    return letter;
}

module.exports = { 
    switchhero,
    updateLetter 
}
