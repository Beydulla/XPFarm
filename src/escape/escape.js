const escape = (park) => {
    if(!Array.isArray(park) || !park.length){
        return -1;
    }
    const output = [];
    const carPos = positionOfCar(park);
    let carFloor = carPos[0];
    let carIndex = carPos[1];
    let down = 0;
    for(let i = carFloor; i < park.length; i++){
        const stairsIndex = positionOfStairs(park[i]);
        const move = nextMove(carIndex, stairsIndex);
        if(move){
            if(down){
                output.push("D" + down);
                down = 0;
            }
            output.push(move);
        }else{
            if(i + 1 === park.length && down){
                output.push("D" + down);
            }
        }
        carIndex = stairsIndex
        down++
    }
    return output;
}

const positionOfCar = (park) => {
    for(let i = 0; i < park.length; i++){
        for(let k = 0; k < park[0].length; k++){
            if(park[i][k] === 2){
                return [i, k]
            }
        }
    }
}

const positionOfStairs = (floor) => {
    for(let i = 0; i < floor.length; i++){
        if(floor[i] === 1){
            return i;
        }
    }
    return floor.length - 1;
}

const nextMove = (carPosition, stairsPosition) => {
    const spaceCount = carPosition - stairsPosition;
    if(spaceCount > 0){
        return "L" + spaceCount;
    }
    if(spaceCount < 0){
        return "R" + Math.abs(spaceCount);
    }
    return 0;
}


module.exports = {
    escape,
    positionOfCar,
    positionOfStairs,
    nextMove
}