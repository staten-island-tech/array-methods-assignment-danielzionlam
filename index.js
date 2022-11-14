const arr = [
  {
    name: "Mike Whalen",
    powerlevel: 999999,
  } /*heavily nerfed(had to help ms.maslukova with her smart board)*/,
  {
    name: "Mark Erlenwein",
    powerlevel: 10000000,
  } /*extreme buff(in halloween costume)*/,
  {
    name: "Everton Henriques",
    powerlevel: 9999999,
  } /*base form*/,
  {
    name: "Joeseph Frusci",
    powerlevel: 999999.001,
  } /*buffed(just put on creed aventus)*/,
  {
    name: "John Callahan",
    powerlevel: 800000,
  } /*nerfed(post teaching freshmen class)*/,
  {
    name: "Nicholas Macula",
    powerlevel: 100000000,
  } /*base form*/,
  {
    name: "James McCarthy",
    powerlevel: 900000,
  } /*severly nerfed(recieved hundreds of medical forms from kids who won't make the basketball team)*/,
  {
    name: "Micheal Grippo",
    powerlevel: 900000,
  } /*severly nerfed(nine periods of weightroom)*/,
];

arr.forEach((arr) => {
  console.log(arr.name);
});

arr.forEach((arr) => {
  console.log(arr.powerlevel);
});

const filteredArr = arr.filter((arr) => {
  return arr.powerlevel <= 999999;
});

console.log(filteredArr);
