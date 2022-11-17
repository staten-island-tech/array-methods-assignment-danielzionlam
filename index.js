const arr = [
  {
    name: "Mike Whalen",
    animal: "Lion",
    numbers: [1, 2, 3, 4],
    powerlevel: 999999,
  } /*heavily nerfed(had to help ms.maslukova with her smart board)*/,
  {
    name: "Mark Erlenwein",
    animal: "Ox",
    numbers: [100, 200, 300, 400],
    powerlevel: 10000000,
  } /*extreme buff(in halloween costume)*/,
  {
    name: "Everton Henriques",
    animal: "Leopard",
    numbers: [5, 6, 7, 8],
    powerlevel: 9999999,
  } /*base form*/,
  {
    name: "Joeseph Frusci",
    animal: "Wolf",
    numbers: [9, 10, 11, 12],
    powerlevel: 999999.001,
  } /*buffed(just put on creed aventus)*/,
  {
    name: "John Callahan",
    animal: "Bear",
    numbers: [13, 14, 15, 16],
    powerlevel: 800000,
  } /*nerfed(post teaching freshmen class)*/,
  {
    name: "Nicholas Macula",
    animal: "Cat",
    numbers: [17, 18, 19, 20],
    powerlevel: 100000000,
  } /*base form*/,
  {
    name: "James McCarthy",
    animal: "Crocodile",
    numbers: [21, 22, 23, 24],
    powerlevel: 900000,
  } /*severly nerfed(recieved hundreds of medical forms from kids who won't make the basketball team)*/,
  {
    name: "Micheal Grippo",
    animal: "Tiger",
    numbers: [25, 26, 27, 28],
    powerlevel: 900000,
  } /*severly nerfed(nine periods of weightroom)*/,
];

arr.forEach((arr) => {
  console.log(arr.name);
});

arr.forEach((arr) => {
  console.log(arr.animal);
});

arr.forEach((arr) => {
  console.log(arr.numbers);
});

arr.forEach((arr) => {
  console.log(arr.powerlevel);
});

const filteredArr = arr.filter((arr) => {
  return arr.powerlevel <= 999999;
});

console.log(filteredArr);
