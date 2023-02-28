let user = {
  name: "Василий Иванович",
  age: 35
};

let user2 = JSON.stringify(user);
let user3 = JSON.parse(user2);

console.log(user2);
console.log(user3);