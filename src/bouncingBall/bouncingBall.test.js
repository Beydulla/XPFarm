const { describe, test, expect } = require('@jest/globals');

const { bouncingBall, motherSawBall, currentHeight } = require("./bouncingBall")

describe('Tests for bouncing ball kata', () => {
    describe('Tests for validation', () => {
        test("Expect -1 when height is zero", () => {
            expect(bouncingBall(0)).toEqual(-1);
        });
        test("Expect -1 when height is less than zero", () => {
            expect(bouncingBall(-5)).toEqual(-1);
        });
        test("Expect -1 when bounce is zero", () => {
            expect(bouncingBall(5, 0)).toEqual(-1);
        });
        test("Expect -1 when bounce is less than zero", () => {
            expect(bouncingBall(5, -2)).toEqual(-1);
        });
        test("Expect -1 when bounce is one", () => {
            expect(bouncingBall(5, 1)).toEqual(-1);
        });
        test("Expect -1 when bounce is greater than 1", () => {
            expect(bouncingBall(5, 10)).toEqual(-1);
        });
        test("Expect -1 when windows = h", () => {
            expect(bouncingBall(5, 0.5, 5)).toEqual(-1);
        });
        test("Expect -1 when windows > h", () => {
            expect(bouncingBall(5, 0.5, 15)).toEqual(-1);
        });
    });
    describe('Tests for logic implementation', () => {
        test("Expect true when current ball height is greater than window", () => {
            expect(motherSawBall(3.0,  1.5)).toEqual(true);
        });
        test("Expect false when current ball height is less  than window", () => {
            expect(motherSawBall(1,  2.5)).toEqual(false);
        });
        test("Expect h * bounce when for given h and bounce to get current height", () => {
            expect(currentHeight(10, 0.66)).toEqual(6.6);
        });

        test("Expect 3 when motherSawBall is true once", () => {
            expect(bouncingBall(3.0, 0.66, 1.5)).toEqual(3);
        });
        test("Expect 15 when input is (30.0, 0.66, 1.5)", () => {
            expect(bouncingBall(30.0, 0.66, 1.5)).toEqual(15);
        });

    });
});