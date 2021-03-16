

const berlinClock = (time) => {
    if(!time || !time.match(/^(([0-1]\d)|(2[0-3])):[0-5]\d:[0-5]\d$/) ){
        return undefined;
    }

    const timeSplitted = time.split(':');
    const seconds = Number(timeSplitted[2]);
    const minutes = Number(timeSplitted[1]);
    let secondsLed = '';
    let minuteLeds = '';

    if(seconds % 2 == 0){
        secondsLed = 'Y'
    }else{
        secondsLed = 'O'
    }

    if(minutes == 0){
        minuteLeds = 'OOOO';
    }else{
        minuteLeds = 'YOOO'
    }

    return `${secondsLed}\nOOOO\nOOOO\nOOOOOOOOOOO\n${minuteLeds}`;


    

}



module.exports = {
    berlinClock
}