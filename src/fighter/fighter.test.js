const { describe, test, expect } = require('@jest/globals');
const { Fighter } = require("./Fighter")

describe('Tests for fighter kata', () => {
    describe('Tests for validation of fighter', () => {
        test("Expect fighter to have name", () => {
            const fighter = new Fighter("Lew", 2, 3);
            expect(fighter.name).toEqual('Lew');
        });
        test("Expect fighter to have health", () => {
            const fighter = new Fighter("Lew", 2, 3);
            expect(fighter.health).toEqual(2);
        });
        test("Expect fighter to have damage", () => {
            const fighter = new Fighter("Lew", 2, 3);
            expect(fighter.damage).toEqual(3);
        });
    });
});
