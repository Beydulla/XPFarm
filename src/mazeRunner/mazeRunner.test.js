const { describe, test, expect } = require('@jest/globals');
const { mazeRunner, positionOf, nextPosition, isPositionValid } = require("./mazeRunner")

describe('Tests for mazeRunner kata', () => {
    const validMaze = [ [1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]];
    describe('Test for validation', () => {
        test("Expect invalid input when input maze is not array", () => {
            expect(mazeRunner("not array")).toEqual('invalid input');
        });

        test("Expect invalid input when input maze is not NxN array", () => {
            const invalidMaze = [[1,1,1,1,1,1,1],
                         [1,0,0,0,0,0,3]];
            expect(mazeRunner(invalidMaze)).toEqual('invalid input');
        });

        test("Expect invalid input when input directions is not array", () => {
            expect(mazeRunner([[1, 2], [2, 4]], "not array")).toEqual('invalid input');
        });

        test("Expect invalid input when input directions is empty array", () => {
            expect(mazeRunner([[1, 2], [2, 4]], [])).toEqual('invalid input');
        });
    });

    describe('Tests for finding position of start and finish points', () => {
        test("Expect start position to be [6, 1] for the given maze array", () => {
            expect(positionOf(validMaze, 2)).toEqual([6 ,1]);
        });
        test("Expect finish position to be [1, 6]  for the given maze array", () => {
            expect(positionOf(validMaze, 3)).toEqual([1, 6]);
        });
    });

    describe('Tests for finding position for a given direction', () => {
        test("Expect array to be [1, 2] when inputs are [2, 2] and 'N'", () => {
            expect(nextPosition([2, 2], 'N')).toEqual([1 ,2]);
        });
        test("Expect array to be [3, 2] when inputs are [2, 2] and 'S'", () => {
            expect(nextPosition([2, 2], "S")).toEqual([3 ,2]);
        });
        test("Expect array to be [2, 3] when inputs are [2, 2] and 'E'", () => {
            expect(nextPosition([2, 2], "E")).toEqual([2, 3]);
        });
        test("Expect array to be [2, 1] when inputs are [2, 2] and 'W'", () => {
            expect(nextPosition([2, 2], "W")).toEqual([2, 1]);
        });
    });

    describe('Tests for checking position whether correct or not', () => {
        test("Expect false when a given position is wall", () => {
            expect(isPositionValid(validMaze, [1, 0])).toEqual(false);
        });
        test("Expect false when a given position is out of the maze", () => {
            expect(isPositionValid(validMaze, [10, 11])).toEqual(false);
        });
    });

    describe('Tests for putting together the logic', () => {
        test("Expect Finish when reach to finis before all moves finish", () => {
            expect(mazeRunner(validMaze, ["N","N","N","N","N","E","E","E","E","E"])).toEqual("Finish");
        });
        test("Expect Dead when you hit the wall", () => {
            expect(mazeRunner(validMaze, ["E"])).toEqual("Dead");
        });
        test("Expect Dead when you go outside the maze border", () => {
            expect(mazeRunner(validMaze, ["W", "W", "W"])).toEqual("Dead");
        });
        test("Expect Lost when you find yourself still in the maze after using all the moves", () => {
            expect(mazeRunner(validMaze, ["N","E","E","E","E"])).toEqual("Lost");
        });

        test("Expect Lost when you find yourself still in the maze after using all the moves", () => {
            expect(mazeRunner(validMaze, ["N","N","N","N","N","E","E","E","E","E","W","W"])).toEqual("Finish");
        });

        test("Expect Lost when you find yourself still in the maze after using all the moves", () => {
            expect(mazeRunner(validMaze, ["N","N","N","N","N","E","E","S","S","S","S","S","S"])).toEqual("Dead");
        });


    });
});