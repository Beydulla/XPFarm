const bouncingBall = (h, bounce, window) => {
    if(h <= 0 || bounce <= 0 || bounce >= 1 || h <= window){
        return -1;
    }
    let output = 1;
    let currentBallHeight = currentHeight(h, bounce);
    while(motherSawBall(currentBallHeight, window)){
        output += 2;
        currentBallHeight = currentHeight(currentBallHeight, bounce);
    }
    return output;
}

const currentHeight = (h, bounce) => {
    return parseFloat((h * bounce).toFixed(2));
}

const motherSawBall = (currentHeight, window) => {
    let bool = false;
    if (currentHeight > window){
        bool = true;
    }
    return bool;

}

module.exports = {
    bouncingBall,
    motherSawBall,
    currentHeight
}