const { describe, test, expect } = require('@jest/globals');

const { descendingOrder, convertToArray, sortArrayAscending } = require("./descendingOrder")


describe('Tests for descendingOrder kata', () => {
    describe('Tests for validation', () => {
        test("Expect zero when  input number is negative", () => {
            expect(descendingOrder(-11)).toEqual(0)
        })

        test("Expect zero when  input number is zero", () => {
            expect(descendingOrder(0)).toEqual(0)
        } )

    });

    describe('Tests for logic implementation', () => {
        test("Expect digits in array when  input is number", () => {
            expect(convertToArray(1567)).toEqual([1, 5, 6, 7])
        })


        test("Expect descending array when input is digit array", () => {
            expect(sortArrayAscending([1, 7, 3,5 ])).toEqual([7, 5, 3, 1])
        })

        test("Expect 9651 order when input is 1956", () => {
            expect(descendingOrder(1956)).toEqual(9651)
        })

        test("Expect 55331 order when input is 35351", () => {
            expect(descendingOrder(35351)).toEqual(55331)
        })
    });
});