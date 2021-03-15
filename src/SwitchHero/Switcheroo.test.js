const { test, expect } = require('@jest/globals');
const { switchhero, updateLetter } = require('./Switcheroo');

describe("Tests for switch hero", () => {
    test("Expect empty string when input is not string", () => {
        expect(switchhero(1)).toEqual("");
    });

    test("Expect 'b' when input is 'a'", () => {
        expect(updateLetter("a")).toEqual("b");
    })

    test("Expect 'a' when input is 'b'", () => {
        expect(updateLetter("b")).toEqual("a");
    })

    test("Expect 'abca' when input is 'bacb'", () => {
        expect(switchhero("abca")).toEqual("bacb");
    })
    
});
