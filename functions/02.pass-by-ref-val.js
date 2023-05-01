'use state';

/* JavaScript is always Pass By Value,
even though it may be seen that we are passing reference,
but we pass the address value of that reference object */
const flight = 'LH234';
const ujjawal = {
    name: 'Ujjawal Gutpa',
    passport: 87654321,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH888';
    passenger.name = 'Mr. ' + passenger.name; // object will change

    if (passenger.passport === 87654321) {
        console.log('Checked In');
    } else console.log('Wrong Passport');
};

checkIn(flight, ujjawal);
console.log(flight);
console.log(ujjawal);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(ujjawal);  // this will update the original passport
checkIn(flight, ujjawal);
