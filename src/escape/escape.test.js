const { describe, test, expect } = require('@jest/globals');
const { escape, positionOfCar, positionOfStairs, nextMove, positionGround } = require("./escape")

describe('Tests for car park kata', () => {
    describe('Tests for validation', () => {
        test("Expect -1 when input is not array", () => {
            expect(escape("not array")).toEqual(-1);
        });
        test("Expect -1 when input is empty array", () => {
            expect(escape([])).toEqual(-1);
        });
    });
    describe('Test getting position of car ', () => {
        test("Expect [1, 1] when input is [[0, 0, 0, 1], [0, 2, 0, 1]]", () => {
            expect(positionOfCar([[0, 0, 0, 1], [0, 2, 0, 1]])).toEqual([1, 1]);
        });
    });
    describe('Test for getting position of staircase in the given floor ', () => {
        test("Expect 3 when input is [0, 0, 0, 1, 2]", () => {
            expect(positionOfStairs([0, 0, 0, 1, 2])).toEqual(3);
        });
        test("Expect 4 when input is [0, 0, 0, 0, 0] which is ground floor", () => {
            expect(positionOfStairs([0, 0, 0, 0, 0])).toEqual(4);
        });
    });
    describe('Test for moves in the floor', () => {
        test("Expect L4 when input is 4,  0]", () => {
            expect(nextMove(4,0)).toEqual("L4");
        });
        test("Expect R1 when input is 2, 3", () => {
            expect(nextMove(2,3)).toEqual("R1");
        });
        test("Expect 0 when input is 3,  3", () => {
            expect(nextMove(3,3)).toEqual(0);
        });
        test("Expect 'R3' when input is 1, 4", () => {
            expect(nextMove(1, 4)).toEqual("R3");
        });

    });

    describe('Test for putting together the logic', () => {
        test("Expect ['R3'] when input is [[0, 2, 0, 0, 0]]", () => {
            expect(escape([[0, 2, 0, 0, 0]])).toEqual(["R3"]);
        });
        test("Expect [] when input is [[0, 0, 0, 0, 2]]", () => {
            expect(escape([[0, 0, 0, 0, 2]])).toEqual([]);
        });

        test('Expect  ["L4", "D1", "R4"] when input is [[1, 0, 0, 0, 2], [0, 0, 0, 0, 0]]', () => {
            expect(escape([[1, 0, 0, 0, 2], [0, 0, 0, 0, 0]])).toEqual(["L4", "D1", "R4"]);
        });

        test('Expect  ["R3", "D2", "R1"] when input is [[2, 0, 0, 1, 0],\n' +
                                    '                            [0, 0, 0, 1, 0],\n' +
                                    '                            [0, 0, 0, 0, 0]]', () => {
            const park = [[2, 0, 0, 1, 0],
                        [0, 0, 0, 1, 0],
                        [0, 0, 0, 0, 0]];
            expect(escape(park)).toEqual(["R3", "D2", "R1"]);
        });

        test('Expect    ["R3", "D3"] when input is [[0, 2, 0, 0, 1],\n' +
                                            '                [0, 0, 0, 0, 1],\n' +
                                            '                [0, 0, 0, 0, 1],\n' +
                                            '                [0, 0, 0, 0, 0]]', () => {
            const park  =  [[0, 2, 0, 0, 1],
                            [0, 0, 0, 0, 1],
                            [0, 0, 0, 0, 1],
                            [0, 0, 0, 0, 0]];
            expect(escape(park)).toEqual(["R3", "D3"]);
        });

    });


});