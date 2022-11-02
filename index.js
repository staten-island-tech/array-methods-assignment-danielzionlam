/*let variable; //variable declaration
variable = "Variable"; // variable definition
let number = 7; //number data type
let string = "Hello"; //strind data type
let truthy = true; //boLeans
let falsey = false; //boLeans
let bigString = "Hello, I'm a bigger string"; //camel case

var variable2 = "var"; //we dont do this
let variable3; // we can define later OR REDEFINE
variable = "nope";
console.log(variable);
const constant = "constant"; //cannot redefine

const nullTest = null; //absence of value
const undefinedTest = "test";

console.log(nullTest, undefinedTest);

const number1 = 1234;
const number2 = 4321;
let add = number1 + number2;
let sub = number1 - number2;
let mult = number1 * number2;
let div = number1 / number2;
console.log(mult, div);*/

/*//Strings
const str = "Hello, my name is";
const name = "Mike.";
const greet = "How are you today?";
const newStr = str + name + greet;

//temperate liteals
const literal = `This is a new string, is it not cool? ${str} ${name} ${greet}`;
console.log(literal);*/

//functions

/*function test() {
  console.log;
  ("This is a test");
} //declare the function,
test(); //call the function

function arguement(student) {
  console.log(`This is my student ${student}`);
}

arguement("Claire"); //not type specific
arguement(8);

function add(x, y) {
  return x + y;
}
console.log(add(7, 9));
const answer = add(7, 9);
console.log(answer);*/

/*//global scope
const number = 7;
function doA() {
  //start function scope
  const number = 8;
  function doB() {
    const test = "hello there";
    console.log(number);
  }
  doB(); //step1
  doB(); //step2
  doB(); //step3
  console.log(test);
}

doA();*/

//Arrays it is a list
// const arr = [3, 6, 9];

// console.log(arr[0]); //0 index
// console.log(arr[1]); //0 index
// console.log(arr[2]); //0 index
// console.log(arr[3]); //0 index

const arr2 = [true, false, "yay!", [3, 6, 7], null, 9];
//console.log(arr2.length);

arr2.unshift(" pushed");
arr2.pop();
console.log(arr2);
