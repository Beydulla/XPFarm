const { describe, test, expect } = require('@jest/globals');
const { VendingMachine } = require("./vendingMachine")

describe('Tests for vendingMachine kata', () => {
    describe('Tests  initializing VendorMachine class', () => {
        test("Expect given items and money to be assigned to class variables", () => {
            const items = [{name:"Smarties", code:"A01", quantity:10, price:0.60}];
            const money = 150;
            const vendingMachine = new VendingMachine(items, 150);
            expect(vendingMachine.items).toEqual(items);
            expect(vendingMachine.money).toEqual(money);
        });
        test("Expect error thrown when items is  not array", () => {
            expect(() => new VendingMachine("not array", 150)).toThrow("invalid items")

        });
        test("Expect error thrown when items is  empty array", () => {
            expect(() => new VendingMachine([], 150)).toThrow("invalid items")

        });
    });

    describe('Tests  vend function', () => {
        const items = [ {name:"Smarties", code:"A01", quantity:10, price:0.60},
                        {name:"Caramac Bar", code:"A02", quantity:5, price:0.60},
                        {name:"Dairy Milk", code:"A03", quantity:1, price:0.65},
                        {name:"out item", code:"A00", quantity:0, price:0.65},
                        {name:"Freddo", code:"A04", quantity:1, price:0.25}];
        const money = 150;
        const vendingMachine = new VendingMachine(items, 150);
        test("Expect  {name:\"Caramac Bar\", code:\"A02\", quantity:5, price:0.60} when code is A02", () => {
            expect(vendingMachine.getItemByCode("A02")).toEqual( {name:"Caramac Bar", code:"A02", quantity:5, price:0.60});
        });

        test("Expect 'Not enough money!' when the money given to the machine is less than the item cost", () => {
            expect(vendingMachine.vend("A01", 0.5)).toEqual('Not enough money!');
        });

        test("Expect 'Item Name: Out of stock!' when  the quantity is 0 for an item", () => {
            expect(vendingMachine.vend("A00", 1)).toEqual('out item: Out of stock!');
        });

        test("Expect 'Vending Item Name with 9.40 change.' when an item is correctly selected", () => {
            expect(vendingMachine.vend("A02", 2)).toEqual('Vending Caramac Bar with 1.40 change.');
        });

        test("Expect 'Vending Item Name' when there is no change needed to return", () => {
            expect(vendingMachine.vend("A02", 0.60)).toEqual('Vending Caramac Bar');
        });

        test("Expect 'Invalid selection! : Money in vending machine = 150' when item selection is invalid", () => {
            const vendingMachine = new VendingMachine(items, 150);
            expect(vendingMachine.vend("invalid", 0.60)).toEqual("Invalid selection! : Money in vending machine = 150.00");
        });
        test("Expect  money in the machine to be updated after vending", () => {
            const vendingMachine = new VendingMachine(items, 10);
            vendingMachine.vend("A02", 0.60)
            expect(vendingMachine.money).toEqual(10.60);
        });
        test("Expect quantity in the machine to be updated after vending", () => {
            const vendingMachine = new VendingMachine([{name:"Smarties", code:"A01", quantity:10, price:0.60}], 10);
            vendingMachine.vend("A01", 0.60)
            expect(vendingMachine.items[0]['quantity']).toEqual(9);
        });

    });
});