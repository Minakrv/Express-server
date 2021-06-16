const getPerson = require("./person");

let people = [
  {
    name: "Ann",
    age: 18,
    location: "Manchester",
  },
  {
    name: "Ben",
    age: 20,
    location: "London",
  },
  {
    name: "Charlie",
    age: 15,
    location: "Chester",
  },
];

const getPeople = () => {
  return people;
};

module.exports = getPeople;
