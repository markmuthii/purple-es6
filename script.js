// ES6

// 1. Arrow Functions

// function sayMyName(name) {
//   console.log("Your name is " + name);
// }

// sayMyName("John Wick");

// const sayMyName_ = (name) => {
//   console.log("Your name is " + name);
// };

// sayMyName_("John McClane");

// 2. Let and Const

// let a = "Alois";

// const letConstVar = () => {
//   var b = "Aron 1";
//   var b = "Aron 2";
//   // console.log(b);
//   // console.log(z);
// };

// if (4 > 2) {
//   let v = "Stanley";
//   console.log("I am inside an if");
//   console.log(v); //
// }

// let v = "Stanley 1";

// console.log(v); //

// for (var i = 0; i < 4; i++) {
//   console.log("I am inside a loop");
// }

// console.log(i);
// letConstVar();

// console.log(b); //

// Hoisting

// Declaration
// Assignment
// re-declaration
// re-assignment

// let v;

// console.log(v);

// v = "Stanley 2";

// v = "Ben";

// console.log(v);

// 3. JS Modules
// Named Imports/Exports
// import { sum } from "./sum.js";
// import { mult } from "./multiply.js";
// Default import/export
// import subtractFunction from "./subtract.js";

// named
// import {
//   assessAssignment,
//   giveAssignment,
//   markAttendance,
// } from "./students.js";

// console.log(sum(2, 2));
// console.log(mult(2, 2));

// console.log(subtractFunction(10, 3));

// giveAssignment();

// assessAssignment();

// markAttendance();

// 4. Destructuring

// Objects
// const student = {
//   firstName: "John",
//   lastName: "Doe",
//   course: "Software",
// };

// console.log(student.firstName);
// console.log(student.lastName);

// const firstName = student.firstName;
// const lastName = student.lastName;
// const course = student.course;

// const v = "John Wick";

// Destructure
// const { course, lastName, firstName, fName } = student;

// console.log(firstName);

// Arrays

// const students = [
//   {
//     name: "Stanley",
//     age: 21,
//     blood_group: "A",
//   },
//   {
//     name: "Ben",
//     age: 17,
//     blood_group: "B",
//   },
//   {
//     name: "Marc",
//     age: 23,
//     blood_group: "C",
//   },
//   {
//     name: "Joe",
//     age: 24,
//     blood_group: "D",
//   },
//   {
//     name: "Michael",
//     age: 25,
//     blood_group: "E",
//   },
//   {
//     name: "Alois",
//     age: 26,
//     blood_group: "F",
//   },
//   { name: "Aron", age: 27, blood_group: "G" },
// ];

// const Stanley = students[0];
// const Ben = students[1];
// const Marc = students[2];
// const Joe = students[3];
// const Michael = students[4];
// const Alois = students[5];
// const Aron = students[6];

// Destructure:
// const [Stanley, Ben, Marc, Joe, Michael, Alois, Aron] = students;

// 5. Ternary Operator

// if (Ben.age > 18) {
//   console.log("Ben is an adult");
// } else {
//   console.log("Ben is a child");
// }

// console.log(Ben.age > 18 ? "Ben is an adult" : "Ben is a child");

// if (Ben.age > 35) {
//   console.log("Ben is really old");
// } else if (Ben.age > 18) {
//   console.log("Ben ni yut");
// } else {
//   console.log("Ben ni mtoi");
// }

// console.log(
//   Ben.age > 35
//     ? "Ben is really old"
//     : Ben.age > 18
//     ? "Ben ni yut"
//     : "Ben ni mtoi"
// );

// 6. Promises  - To come back to this later

// 7. New methods
// - ARRAYS
//  - .find()
//  - .of()
//  - .from()
//  - .findIndex()
//  - includes()
//  - .fill()

// - STRING
//  - .startsWith()
//  - .endsWith()
//  - .includes()
//  - .repeat()

// - NUMBER
//  - .isFinite()
//  - .isNaN()
//  - .isInterger()
//  - .parseInt()
//  - .parseFloat()

// - OBJECT
//  - .assign()
//  - .is()
//  - .entries()
//  - .values()
//  - .keys()

// - MATH
//  - .trunc()
//  - .sign()
//  - .cbrt()
//  - .clz32()
//  - .imul()

// 8. Template literals

// const hobby = "Football";
// const talent = "Swimming";

// const age = 18;

// console.log("My hobby is " + hobby + ". My talent is " + talent + "."); // pre-es6
// with es6 template literals
// console.log(`My hobby is ${hobby}. My talent is ${talent}.`);

// console.log(`I am ${age >= 18 ? "an adult" : "a child"}`);

// Create an email template to demonstrate template literals

// const emailTemplate = (name, course) => {
//   return `Hello ${name}, welcome to the ${course} course. We are glad to have you on board.`;
// };

// console.log(emailTemplate("Stanley", "Software Engineering"));

// 9. Classes

// 10. Rest and Spread Operators

// Spread

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const arr2 = [...arr, 10];

// console.log(arr2);

// Rest

// const sum = (...args) => {
// Args is an array because of the rest operator

// let total = 0;

// Foreach
// args.forEach((num) => {
//   total += num;
// });

// Reduce
// total = args.reduce((acc, num) => acc + num, 0);

// For of
// for (let num of args) {
//   total += num;
// }

// For loop
// for (let i = 0; i < args.length; i++) {
//   total += args[i];
// }

// While loop
// let i = 0;
// while (i < args.length) {
//   total += args[i];
//   i++;
// }

//   console.log(total);
// };

// sum(1, 2, 3, 4, 5);

// const args = [1, 2, 3, 4];
