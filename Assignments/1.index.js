// 1. Get Length of string
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}
getLength("Hello World");

const str = "Raghav Singraur";
console.log("Length:", str.length);

//2. index of
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World");

// 3. lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");

//4. slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5); // prints until 5 not 5.

//5.substring(if starts from zero then it is same as slice)
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 2, 7);

// 6. replace string

const string = "Hello Raghav";
console.log(string.replace("Raghav", "Javascript"));

//7. split
const values = "Hi, My, Name, Is, Raghav";
const Words = values.split(","); //comma is a delimiter from where we have to split the string.
console.log(Words);

// 8. Trim - removes extra spaces from the string.

const value3 = "    Raghvendra Singh   ";
console.log(value3.trim());

//9. toUpperCase

const value4 = "Raghav Singh";
console.log(value4.toUpperCase());

//10. toLowerCase
const value5 = "Raghav Singh";
console.log(value5.toLowerCase());