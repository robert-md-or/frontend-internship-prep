// 1. greet function
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Robert"));

// 2. add function
function add(a, b) {
  return a + b;
}
console.log(add(3, 7));

// 3. isAdult arrow function
const isAdult = (age) => age >= 18;
console.log(isAdult(15));
console.log(isAdult(21));

// 4. getFullName function
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(getFullName("Robert", "Moldovan"));