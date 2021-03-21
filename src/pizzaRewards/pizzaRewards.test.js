const { describe, test, expect } = require('@jest/globals');
const { pizzaRewards, minOrderCount, hasMinOrderWithMinPrice } = require("./pizzaRewards")


describe('Tests for pizza reward kata', () => {
    describe('Tests for validation', () => {
        test("Expect empty array when input customers is empty object", () => {
            expect(pizzaRewards({}, 4, 50)).toEqual([]);
        });

        test("Expect empty array when input minOrder is not a number", () => {
            expect(pizzaRewards({}, "not number")).toEqual([]);
        });

        test("Expect empty array when input minPrice is not a number", () => {
            expect(pizzaRewards({}, 5, 'not a number')).toEqual([]);
        });
    });

    describe('Tests for getting count of minPrice from the list of orders', () => {
        test("Expect 0 when order list is empty", () => {
            expect(minOrderCount([], 32)).toEqual(0);
        });
        test("Expect 3 when order list is [45, 56, 10, 42, 30] and minPrice is 32", () => {
            expect(minOrderCount([45, 56, 10, 42, 30], 32)).toEqual(3);
        });

    });

    describe('Test for comparing customer orders with min price', () => {
        const requiredMinOrder = 10
        test("Expect false when customer doesnt have required order with minimum price", () => {
            const customerMinOrder = 9;
            expect(hasMinOrderWithMinPrice(customerMinOrder, requiredMinOrder)).toEqual(false);
        });
        test("Expect true when customer have required order with minimum price", () => {
            const customerMinOrder = 11;
            expect(hasMinOrderWithMinPrice(customerMinOrder, requiredMinOrder)).toEqual(true);
        });


    });
    describe('Tests for implementing core logic', () => {
        const minOrders = 5
        const minPrice = 20
        const customers = {
            'John Doe': [22, 30, 11, 17, 15, 52, 27, 12], // Only has three orders above 20$, so no pizza
            'Jane Doe': [5, 17, 30, 33, 40, 22, 26, 10, 11, 45] // Has six orders above 20$, which means FREE PIZZA!
        }
        test("Expect ['Jane Doe'] when Jane Doe has free pizza", () => {
            expect(pizzaRewards(customers, minOrders, minPrice)).toEqual(['Jane Doe']);
        });

    });
});