// An object consists of properties of key: value pairs
// In arrays elements are ordered,
//Use array if you want orderd data, otherwise use objects for unordered data.
// We can retrieve dada from their name
const ujjawal = {
    firstName: "Ujjawal",
    lastName: "Gupta",
    birthYear: 2000,
    job: "Frondend Developer",
    hasDrivingLicense: false,
    // age: 2023 - 2000,
    friends: ["Rishabh", "Utkarsh", "Yojan", "Nihal"],
    // calcAge: function (birthYear) {
    //     return 2023 - birthYear
    // },

    // calcAge: function () {
    //     return 2023 - this.birthYear
    // },

    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he ${this.hasDrivingLicense ? 'has a' : 'does not have a'} Driving License`
    }
};

console.log(ujjawal);

// with . notation we have to use the original property name,
// but with [] we can make our expression and get property from the object

console.log(ujjawal.calcAge());
console.log(ujjawal.age);
console.log(ujjawal['firstName']);

nameKey = 'Name'
console.log(ujjawal['first' + nameKey]);
console.log(ujjawal['last' + nameKey]);

ujjawal.location = "Nainital"
ujjawal['twitter'] = "@ujjawalkrgupta"

console.log(ujjawal);

console.log(`${ujjawal.firstName} has ${ujjawal.friends.length} friends, and his best friend is ${ujjawal.friends[0]}`);

console.log(ujjawal.calcAge(2000));
console.log(ujjawal['calcAge'](2000));

console.log(ujjawal.getSummary())
console.log(ujjawal);