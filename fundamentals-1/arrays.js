const friend1 = "Ujjawal";
const friend2 = "Naman";
// If we want to store to many values we have to initialize them again and again

const friends = ["Ujjawal", "Naman"];
console.log(friends);

// Arrays can be created using -> new Array()
const years = new Array(2000, 1998, 2001, 2003);
console.log(years.length);

years[1] = 1996; // this is possible in const. because it is mutable

// years = [1, 2, 3, 4]  // but this is invalid

const calcAge = function (birthYear) {
    return 2023 - birthYear;
};

console.log(calcAge(years)); // this will output NaN
console.log(years + 10); // this will output "2000,1996,2001,200310"
console.log(years - 10); // this will output NaN

age = calcAge(years[0]);
console.log(age);

// Array Operators
// push()
const people = ["Ujjawal", "Rishabh", "Utkarsh"];
total_people = people.push("Anurag"); // push add element in array at last and returns length
console.log(total_people, people);

// Add elements add beginning of array and return length
people.unshift("Yojan");

people.pop(); // pop() removes last element of the array

people.shift(); // removes first element from the array

// includes() returns true/false whether value is present in array or not
console.log(people.includes("Ujjawal"));
console.log(people.includes("Nihal"));

// indexOf() return index of element if present in array else -1
console.log(people.indexOf("Utkarsh"));
console.log(people.indexOf("Abheesht"));

const fun = (val) => {
    console.log("hi");
};

// in python we us "in", for JS we use .includes