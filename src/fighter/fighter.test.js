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
        test("Expect empty name when you pass empty string for the fighter", () => {
            expect(() => new Fighter( '',2, 3)).toThrow("empty name");
        });
        test("Expect 100 health when you dont pass health", () => {
            const fighter = new Fighter("Lew" )
            expect(fighter.health).toEqual(100);
        });
        test("Expect damage 10 when you dont pass damage", () => {
            const fighter = new Fighter("Lew" , 100)
            expect(fighter.damage).toEqual(10);
        });

    });
});
