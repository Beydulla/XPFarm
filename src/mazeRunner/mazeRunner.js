//https://www.codewars.com/kata/58663693b359c4a6560001d6/train/javascript
const mazeRunner = (maze, directions) => {
    if(!Array.isArray(maze) || maze.length <= 1 || (maze.length !== maze[0].length)
        || !Array.isArray(directions) || directions.length === 0){
        return 'invalid input';
    }
    let currentPosition = positionOf(maze, 2);
    const finishPosition = positionOf(maze, 3);
    for(let i = 0; i < directions.length; i++){
        currentPosition = nextPosition(currentPosition, directions[i]);
        if(!isPositionValid(maze, currentPosition)){
            return "Dead";
        }
        if(finishPosition[0] === currentPosition[0] && finishPosition[1] === currentPosition[1]){
            return "Finish";
        }
    }
    return "Lost";
}


const nextPosition = (currentPosition, direction) => {
    const firstIndex = currentPosition[0];
    const secondIndex = currentPosition[1];
    let nextPosition = [];
    switch (direction){
        case 'N':
            nextPosition = [firstIndex - 1, secondIndex];
            break;
        case 'S':
            nextPosition = [firstIndex  + 1, secondIndex];
            break;
        case 'E':
            nextPosition = [firstIndex, secondIndex + 1];
            break;
        case 'W':
            nextPosition = [firstIndex, secondIndex - 1];
            break;
    }
    return nextPosition

}

const positionOf = (maze, searchNumber) => {
    let position = [];
    const mazeLength = maze.length;
    for(let i = 0; i < mazeLength; i++){
        for(let j = 0; j < mazeLength; j++){
            if(maze[i][j] === searchNumber){
                position = [i, j]
                break;
            }
        }
    }
    return position;
}

const isPositionValid = (maze, position) => {
    console.log(position)
    if(position[0] < 0 || position[1] < 0 || maze.length <= position[0]
        || maze[0].length <= position[1] || maze[position[0]][position[1]] === 1){
        return false;
    }
    return true;

}

module.exports = {
    mazeRunner,
    positionOf,
    nextPosition,
    isPositionValid

}