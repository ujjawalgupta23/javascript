'use-strict';

console.log(this);

const calcAge = function(birthYear){
    console.log(2023 - birthYear);
    console.log(this);
}

calcAge(2000)

const calcAgeArrow = (birthYear) => {
    console.log(2023 - birthYear);
    console.log(this);
}

calcAgeArrow(1998)


const naman = {
    year: 2000,
    calcAge: function () {
        console.log(this);
        console.log(2023 - this.year);
    },
}
naman.calcAge();

const ujjawal = {
    year: 1998,
}

ujjawal.calcAge = naman.calcAge
ujjawal.calcAge()

const xyz = naman.calcAge
// xyz.year = 2001
// xyz.calcAge()
xyz()
