const { describe, test, expect } = require('@jest/globals');
const { calculateDamage, effectiveness } = require("./calculateDamage");


describe('Tests for calculate damage kata', () => {
    describe('Test for validation', () => {
        test("Expect 0 when yourType is not fire, water, grass, or electric", () => {
            expect(calculateDamage("ice")).toEqual(0);
        });
        test("Expect 0 when opponentType is not fire, water, grass, or electric", () => {
            expect(calculateDamage("fire", "ice")).toEqual(0);
        });
    });

    describe('Test for calculating effectiveness', () => {
        test("Expect 2 when yourType is fire and opponent's is grass", () => {
            expect(effectiveness("fire", "grass")).toEqual(2);
        });
        test("Expect 0.5 when yourType is fire and opponent's is water", () => {
            expect(effectiveness("fire", "water")).toEqual(0.5);
        });
        test("Expect 1 when yourType is fire and opponent's is also electric", () => {
            expect(effectiveness("fire", "electric")).toEqual(1);
        });
        test("Expect 0.5 when yourType is water and opponent's is grass", () => {
            expect(effectiveness("water", "grass")).toEqual(0.5);
        });
        test("Expect 0.5 when yourType is water and opponent's is electric", () => {
            expect(effectiveness("water", "electric")).toEqual(0.5);
        });
        test("Expect 1 when yourType is grass and opponent's is electric", () => {
            expect(effectiveness("grass", "electric")).toEqual(1);
        });
        test("Expect 0.5 when yourType and opponent's is the same", () => {
            expect(effectiveness("grass", "grass")).toEqual(0.5);
        });
        test("Expect 1 when yourType is water and opponent's is fire", () => {
            expect(effectiveness("water", "fire")).toEqual(2);
        });
        test("Expect 1 when yourType is grass and opponent's is water", () => {
            expect(effectiveness("grass", "water")).toEqual(2);
        });
        test("Expect 1 when yourType is electric and opponent's is water", () => {
            expect(effectiveness("electric", "water")).toEqual(2);
        });

    });
    describe('Test for calculating equations', () => {
        test("Expect 25 when input is (fire, water, 100, 100)", () => {
            expect(calculateDamage("fire", "water", 100, 100)).toEqual(25);
        });
        test("Expect 25 when input is (grass, water, 25, 25)", () => {
            expect(calculateDamage("grass", "water", 25, 25)).toEqual(100);
        });
    });


});