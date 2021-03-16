const { test, expect } = require('@jest/globals');

const { berlinClock } = require("./berlinClock")

describe("Tests for berlin clock", () => {
    describe("Input should be valid", () => {

        test("Expect undefined when input is undefined", () => {
            expect(berlinClock(undefined)).toEqual(undefined);
        }); 
    
        test("Expect undefined when input is empty string", () => {
            expect(berlinClock('')).toEqual(undefined);
        });
    
        test("Expect undefined when input is chars", () => {
            expect(berlinClock('asds')).toEqual(undefined);
        });
    
        test("Expect undefined when format is not good", () => {
            expect(berlinClock('25:88:99')).toEqual(undefined);
        });
    });

    describe("Tests for seconds", () => {

        test("Expect seconds is lit when input has even seconds", () => {
            expect(berlinClock("00:00:01")).toEqual("O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
        }); 
    
        test("Expect seconds is unlit when input has odd seconds", () => {
            expect(berlinClock("00:00:00")).toEqual("Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
        }); 
    });

    describe("Tests for minutes", () => {
        
        test("Expect first minute is lit when input has one minute", () => {
            expect(berlinClock("00:01:01")).toEqual("O\nOOOO\nOOOO\nOOOOOOOOOOO\nYOOO");
        }); 
    

    });
    

});