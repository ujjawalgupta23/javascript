'use strict';

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

// 2.
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(this.speed);
};

// 3.
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(this.speed);
};

// 1.
const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

// 2.
EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(
        `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`
    );
};

// 4.
const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
