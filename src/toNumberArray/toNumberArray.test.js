const { describe, test, expect } = require('@jest/globals');
const { toNumberArray, toNumber } = require("./toNumberArray");


describe('Tests for the kata', () => {
    describe("Tests for validation", () => {
        test("Expect empty array when input is not array", () => {
           expect(toNumberArray("not array")).toEqual([])
        });

        test("Expect empty array when input is empty array", () => {
            expect(toNumberArray([])).toEqual([]);
        });
    });

    describe("Test for toNumber function", () => {
        test("Expect int value when input is string", () => {
            expect(toNumber("55")).toEqual(55)
        });
    });

    describe("Tests for logic implementation", () => {
        test("Expect [4] when input is  ['4']", () => {
            expect(toNumberArray(['4'])).toEqual([4])
        });

        test("Expect [4.4] when input is  ['4.4']", () => {
            expect(toNumberArray(['4'])).toEqual([4])
        });

        test("Expect [4, 6] when input is  ['4', '6']", () => {
            expect(toNumberArray(['4', '6'])).toEqual([4, 6])
        });

    });
});