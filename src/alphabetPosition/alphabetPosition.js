const alphabetPosition = (text) => {
    if(typeof text !== 'string'){
        return '';
    }
    let output = '';
    for(let i = 0; i < text.length; i++){
        const position = charPosition(asciiCode(toLower(text[i])));
        output += position;
        if(position !== ''){
            output += ' ';
        }
    }
    return output.trim();
}

const asciiCode = (char) =>{
    return char.charCodeAt(0);
}
const charPosition = (asciiCode) => {
    if(asciiCode < 97 || asciiCode > 122){
        return '';
    }
    return String(asciiCode - 96);
}
const toLower = (text) => {
    return text.toLowerCase();
}

module.exports = {
    alphabetPosition,
    asciiCode,
    charPosition,
    toLower

}