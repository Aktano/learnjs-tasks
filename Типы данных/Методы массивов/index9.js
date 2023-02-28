function sortByAge(users) {
    users.sort((a, b) => a.age > b.age ? 1 : -1);
  }

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

sortByAge(users);

// теперь: [vasya, masha, petya]
console.log(users[0].name); // Вася
console.log(users[1].name); // Маша
console.log(users[2].name); // Петя