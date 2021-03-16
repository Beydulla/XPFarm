const { test, expect } = require('@jest/globals');

const { oddOrEven, sumOfArray, isValueOddOrEven } = require("./oddOrEven")

describe("Tests fro Odd or Even", () => {

    test("Expect even when input is empty", () => {
        expect(oddOrEven([])).toEqual("even");
    });

    test("Expect even  when input is undefined", () => {
        expect(oddOrEven()).toEqual("even");
    })

    test("Expect even  when input is [0]", () => {
        expect(oddOrEven([0])).toEqual("even");
    })


    test("Expect sum to be 10 when array [1, 4, 5,]", () => {
        expect(sumOfArray([1, 4, 5])).toEqual(10);
    })

    test("Expect even from isValueOddOrEven function when input value is 10", () => {
        expect(isValueOddOrEven(10)).toEqual("even");
    })

    test("Expect odd  isValueOddOrEven function when input value is 9", () => {
        expect(isValueOddOrEven(9)).toEqual("odd");
    })

    test("Expect odd from oddOrEven function when input array is [1, 3, 7]", () => {
        expect(oddOrEven([1, 3, 7])).toEqual("odd");
    })

    test("Expect even from oddOrEven function when input array is [1, 3, 16, 20]", () => {
        expect(oddOrEven([1, 3, 16, 20])).toEqual("even");
    })
})