class Customer {
    constructor(name, discountRate) {
        this._name = name;
        this._discountRate = discountRate;
        this._contract = new CustomerContract(dateToday());
        }
    get discountRate() {return this._discountRate;}
    becomePreferred() {
        this._discountRate += 0.03;
        // さらに便宜を図る
    }
    applyDiscount(amount) {
        return amount.substract(amount.multiply(this._discountRate));
    }
}

class CustomerContract {
    constructor(startDate) {
        this._startDate = startDate;
    }
}