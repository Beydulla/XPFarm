const { describe, test, expect } = require('@jest/globals');
const { likes } = require("./likes")

describe('Tests for likes kata', () => {
    describe('Test for validation', () => {
        test("Expect empty array when input is not array", () => {
            expect(likes("not array")).toEqual('invalid input');
        });
    });

    describe('Test for logic implementation', () => {
        test("Expect 'no one likes this' string when input empty array", () => {
            expect(likes([])).toEqual('no one likes this');
        });
        test("Expect 'Peter likes this' string when input array contains only Peter", () => {
            expect(likes(['Peter'])).toEqual('Peter likes this');
        });
        test("Expect 'Peter and Beydu like this' string when input array contains Peter and Beydu", () => {
            expect(likes(['Peter', 'Beydu'])).toEqual('Peter and Beydu like this');
        });
        test("Expect 'Peter, Anar and Beydu like this' string when input array contains Peter, Anar,  Beydu", () => {
            expect(likes(['Peter', 'Anar', 'Beydu'])).toEqual('Peter, Anar and Beydu like this');
        });
        test("Expect 'Peter, Anar and 2 others like this' string when input array contains Peter, Anar, Beydu, Ali", () => {
            expect(likes(['Peter', 'Anar', 'Beydu', 'Ali'])).toEqual('Peter, Anar and 2 others like this');
        });


    });
});
