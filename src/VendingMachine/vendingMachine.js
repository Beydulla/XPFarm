https://www.codewars.com/kata/586e6d4cb98de09e3800014f/train/javascript
class VendingMachine {
    constructor(items, money) {
        this.validateInputs(items)
        this.items = items;
        this.money = money;

    }

    vend(selection, itemMoney) {
        const item = this.getItemByCode(selection);
        const validationResult = this.validateGivenSelection(item, itemMoney);
        if(validationResult) {
            return validationResult;
        }

        this.money = this.money + item['price'];
        item['quantity'] = item['quantity'] - 1;

        const change = itemMoney - item['price'];
        const itemNameTempl = "Vending " + item['name'];
        if(change === 0){
            return itemNameTempl;
        }
        return `${itemNameTempl} with ${change.toFixed(2)} change.`;

    }

    validateGivenSelection(item, itemMoney){
        if(item == null){
            return "Invalid selection! : Money in vending machine = " + this.money.toFixed(2);
        }

        if(itemMoney < item['price']){
            return 'Not enough money!';
        }
        if(item['quantity'] === 0){
            return item['name'] + ': Out of stock!';
        }
        return null;
    }

    getItemByCode (selectionCode){
        let output = null;
        this.items.forEach(item => {
            if(item['code'] === selectionCode){
                output = item;
            }
        })

        return output;
    }

    validateInputs (items){
        if(!Array.isArray(items) || items.length === 0){
            throw "invalid items"
        }
    }


}

module.exports = {
    VendingMachine
}