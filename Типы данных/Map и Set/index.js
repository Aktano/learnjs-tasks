function unique(arr) {
    let set = new Set();
  for (let value of arr) {
    set.add(value);
  }
  return set;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare,Krishna,:-O