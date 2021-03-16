const { describe, test, expect } = require('@jest/globals');
const { sumOfDigits, convertToDigitArray, sumsForAll, sumOfArrayDigits } = require("./sumOfDigits");


describe('Tests for sumOfDigits kata', () => {
    describe('Tests for validation', () => {
        test("Expect empty string when  input is undefined", () => {
            expect(sumOfDigits(undefined)).toEqual('');
        })

        test("Expect empty string when  input is negative integer", () => {
            expect(sumOfDigits(-15)).toEqual('');
        })
    });

    describe('Test fro converting input to digits array', () => {
        test("Expect [3, 3]  when  input is '33'", () => {
            expect(convertToDigitArray(33)).toEqual([3, 3]);
        })

    });

    describe('Tests for getting string of sums for digits array', () => {
        test("Expect '3'  when  input is [3]", () => {
            expect(sumsForAll([3])).toEqual('3');
        });
        test("Expect '4 + 6'  when  input is [4, 6]", () => {
            expect(sumsForAll([4, 6])).toEqual('4 + 6');
        });

        test("Expect '6 + 4 + 3 + 2 + 3'  when  input is [6, 4, 3, 2, 3]", () => {
            expect(sumsForAll([6, 4, 3, 2, 3])).toEqual('6 + 4 + 3 + 2 + 3' );
        })

    });

    describe('Test for getting sum of digits array', () => {
        test("Expect 18 when input is [6, 4, 3, 2, 3]", () => {
            expect(sumOfArrayDigits([6, 4, 3, 2, 3])).toEqual(18);
        })
    });

    describe('Test for putting together all logic', () => {
        test("Expect '6 + 4 + 3 + 2 + 3 = 18' when input is '64323", () => {
            expect(sumOfDigits(64323)).toEqual("6 + 4 + 3 + 2 + 3 = 18");
        })
    });
});