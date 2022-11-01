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

function test() {
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
