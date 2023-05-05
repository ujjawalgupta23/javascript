'use strict';

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// 1.
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
    }
    // 2
    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

// 1.4
const car2 = new Car('Mercedes', 95);
const car1 = new Car('BMW', 120);

car1.accelerate();
car1.accelerate();
car1.brake();

car2.brake();
car2.brake();
car1.accelerate();

// 4.
const car3 = new Car('Ford', 120);
console.log(car3.speedUS);
car3.accelerate();
car3.speedUS = 50;
console.log(car3);
