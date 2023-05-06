'use strict';

class Account {
    // 1.
    locale = navigator.language;

    // Private Field
    #movements = [];

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        // this._movements = []
        // this.locale = navigator.language;

        console.log(`Thanks for oprning an account, ${owner}`);
    }

    // Public Interface
    deposit(val) {
        this.#movements.push(val);
        return this; // for chaining
    }

    // user doesn't have to give -ve value, this function will handle itself
    // this is Abstraction, user doesn't know what's having behing the scene
    withdraw(val) {
        this.#movements.push(-val);
        return this; // for chaining
    }

    getMovements() {
        return this.#movements;
    }

    _approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log('Loan approved');
        }
        return this; // for chaining
    }

    static helper() {
        console.log('Helper Executed');
    }
}

const acc1 = new Account('Ujjawal', 'INR', 1234);

// acc1.movements.push(250)
// acc1.movements.push(-140)
acc1.deposit(120000);
acc1.withdraw(10000);
acc1.requestLoan(1000);
// acc1.approveLoan(2000);

console.log(acc1.getMovements());

console.log(acc1);

Account.helper();

// we have to encapsulate it
console.log(acc1.pin); //1234, this should not happen, it should be hidden

// Why need Encapsulation and Data Privacy
// To prevent code from outside of the class to accidentaly manipulate data inside the class

// we have to add '_' before property name, it is just for convention
// and we still can access the property from outside, it is for developers
// so that by seeing it, they can get that we don't have to access it outside

// To make any property method private, just add # before its name,
// and it can't be accessed outside the class, this is still a proposal

// console.log(acc1.#movements); SyntacError: private cannot be accessed outside

// Chaining Methods
acc1.deposit(2000).deposit(4000).requestLoan(200000).withdraw(1000);
console.log(acc1.getMovements());
