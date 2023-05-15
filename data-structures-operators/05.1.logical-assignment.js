'use strict'

const rest1 = {
    name: 'Haldiram',
    // numGuests = 10,
    numGuests: 0
}

const rest2 = {
    name: 'Bikano',
    owner: 'Mukesh Ambani'
}

// OR assignment operator
rest1.numGuests = rest1.numGuests || 10
rest2.numGuests = rest2.numGuests || 10
rest1.numGuests ||= 10
rest2.numGuests ||= 10

// nullish assignment (null or undefined)
rest1.numGuests ??= 10 // 0
rest2.numGuests ??= 10 // 10

// AND assignment operator
rest1.owner = rest1.owner && '<ANONYMOUS>'
rest1.owner &&= '<ANONYMOUS>'
rest2.owner &&= '<ANONYMOUS>'

console.log(rest1);
console.log(rest2);
