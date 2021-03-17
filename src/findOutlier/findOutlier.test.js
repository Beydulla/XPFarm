const { describe, test, expect } = require('@jest/globals');

const { findOutlier, oddOrEven } = require("./findOutlier");


describe('Tests for find outlier kata', () => {
    describe('Test for validation', () => {
        test("Expect empty array when input is not array", () => {
            expect(findOutlier("not array")).toEqual([]);
        });

        test("Expect empty array when input length is lees than 3", () => {
            expect(findOutlier([1, 4])).toEqual([]);
        });
    });

    describe('Tests checking the number whether odd or even', () => {
        test("Expect odd when input integer is 3", () => {
            expect(oddOrEven(3)).toEqual("odd");
        });

        test("Expect even when input integer is 4", () => {
            expect(oddOrEven(4)).toEqual("even");
        });
    });

    describe('Tests for logic implementation', () => {
        test("Expect 3 when input is [3, 4, 6]", () => {
            expect(findOutlier([3, 4, 6])).toEqual(3);
        });

        test("Expect 3 when input is [2,6,8,10,3]", () => {
            expect(findOutlier([2,6,8,10,3])).toEqual(3);
        });

    });
});
