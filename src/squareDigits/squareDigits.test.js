const { describe, test, expect } = require('@jest/globals');
const { squareDigits, toDigitArray } = require("./squareDigits")


describe('Tests for descendingOrder kata', () => {
    describe('Tests for validation', () => {
        test("Expect zero when input is string", () => {
            expect(squareDigits("string")).toEqual(0);
        })
        test("Expect zero when input is undefined", () => {
            expect(squareDigits(undefined)).toEqual(0);
        })
        test("Expect zero when input is zero", () => {
            expect(squareDigits(0)).toEqual(0);
        })
        test("Expect zero when input is negative number", () => {
            expect(squareDigits(-2)).toEqual(0);
        })
        test("Expect zero when input is float", () => {
            expect(squareDigits(5.2)).toEqual(0);
        })
    });

    describe('Test for toDigitArray', () => {
        test("Expect [3,4] when input is 34", () => {
            expect(toDigitArray(34)).toEqual([3, 4]);
        })
    });


    describe('Tests for logic implementation', () => {
       test("Expect 36 when input is 6", () => {
           expect(squareDigits(6)).toEqual(36);
       });

        test("Expect 164 when input is 18", () => {
            expect(squareDigits(18)).toEqual(164);
        })

    });


});