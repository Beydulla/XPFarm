const { describe, test, expect } = require('@jest/globals');
const { divisors, getDivisors } = require("./divisors")


describe('Tests for finding divisors kata', () => {
    describe('Tests for validation', () => {
        test("Expect empty array when  input is negative number", () => {
            expect(divisors(-5)).toEqual([]);
        })
        test("Expect empty array when  input is 0", () => {
            expect(divisors(0)).toEqual([]);
        })
    });

    describe('Tests for logic implementation', () => {
        test("Expect [3, 5] when input is 15", () => {
            expect(divisors(15)).toEqual([3, 5]);
        });

        test("Expect is prime message when input is prime", () => {
            expect(divisors(13)).toEqual("13 is prime");
        });
    });
})
