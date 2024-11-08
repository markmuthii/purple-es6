class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;

    this.brandColor = "blue";
    this.uniform = "red and white";
  }
  submitCheckpoint(module) {
    console.log(`${this.name} submitted a checkpoint in ${module}`);
  }
}

const sA = new Student("Joe", 24, "Software Engineering");
const sB = new Student("Michael", 25, "Software Engineering");
const sC = new Student("Alois", 26, "Software Engineering");
const sD = new Student("Stanley", 21, "Software Engineering");
const sE = new Student("Ben", 17, "Software Engineering");
const sF = new Student("Marc", 23, "Software Engineering");

console.log(sE.brandColor);

class CustomArray {
  constructor() {
    this.length = 2;
  }

  find() {
    console.log("Find an element in the array");
  }
}

const arr = new CustomArray();

arr.find();
// sA.submitCheckpoint("ES6");
// console.log(Joe.brandColor);

// const str = "This is a string";

// const arr = [1, 2, 3];

// str.length;
// arr.lastIndexOf();
// arr.length;
