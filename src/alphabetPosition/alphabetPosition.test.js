const { describe, test, expect } = require('@jest/globals');
const { alphabetPosition,asciiCode, charPosition, toLower } = require("./alphabetPosition")

describe('Tests for alphabet positions kata', () => {
    describe('Tests for validation', () => {
        test("Expect empty string when  input is not string", () => {
            expect(alphabetPosition(332)).toEqual('');
        });
    });



    describe('Tests for logic implementation', () => {
        test("Expect 50 as ascii code when input char is 2", () => {
            expect(asciiCode('2')).toEqual(50);
        });
        test("Expect empty string when ascii code is less than 97", () => {
            expect(charPosition(96)).toEqual('');
        });
        test("Expect empty string when ascii code is greater than 122", () => {
            expect(charPosition(123)).toEqual('');
        });
        test("Expect '1' when ascii code is 97", () => {
            expect(charPosition(97)).toEqual('1');
        });
        test("Expect abbd when input is AbBd", () => {
            expect(toLower("AbBd")).toEqual('abbd');
        });
        test("Expect '1' when input is a", () => {
            expect(alphabetPosition("a")).toEqual('1');
        });

        test("Expect '1' when input is 'A'", () => {
            expect(alphabetPosition("A")).toEqual('1');
        });

        test("Expect '1 2 3' when input is 'abc'", () => {
            expect(alphabetPosition("abc")).toEqual('1 2 3');
        });
        test("Expect '1 2 3' when input is 'a7b4c'", () => {
            expect(alphabetPosition("a7b4c")).toEqual('1 2 3');
        });

        test("Expect '1' when input is 'a8'", () => {
            expect(alphabetPosition("a8")).toEqual('1');
        });

    });
});