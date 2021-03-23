const { describe, test, expect } = require('@jest/globals');
const { Fighter } = require("./Fighter")
const { declareWinner } = require("./declareWinner")

describe('Tests for declaring winner', () => {
    describe('Tests for subtracting damage from health ', () => {
        test("Expect fighter1 health to be 90 when second fighter damage is 10", () => {
            const fighter1 = new Fighter("Lew", 100, 15);
            const fighter2 = new Fighter("Lew", 100, 10);
            subtractDamage(fighter1, fighter2);
            expect(fighter1.health).toEqual(90);
        });
    });
});