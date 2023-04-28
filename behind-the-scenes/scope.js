'use-strict';

function calcAge(birthYear) {
    const age = 2023 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (1986 <= birthYear <= 1996) {
            var millenial = true;

            // creating new variable with same name as outer scope
            const firstName = 'Naman';

            // reassigning outer scope variable
            output = 'Hi, this is new output';

            const str = `You're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }

        console.log(millenial);
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Ujjawal';
calcAge(1995);
