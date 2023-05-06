'use strict';

class Car {
    // 1.1
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    // 1.2
    accelerate() {
        this.speed += 10;
        console.log(this.speed);
    }
    // 1.3
    brake() {
        this.speed -= 5;
        console.log(this.speed);
        return this; // chaining
    }
    // 2
    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
// 1.1
class EVCl extends Car {
    // 2.
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }
    // 1.2
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this; // 3. chaining
    }
    // 1.3
    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(
            `${this.make} going at ${this.speed} km/h, with charge of ${
                this.#charge
            }%`
        );
        return this; // 3. chaining
    }
}

const rivian = new EVCl('Rivian', 120, 23);
// console.log(rivian.#charge); // not accessible outside because of private
rivian.accelerate().accelerate().chargeBattery(60).brake().accelerate();

console.log(rivian.speedUS);
