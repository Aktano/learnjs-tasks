function copySorted(arr) {
    return arr.slice().sort();
  }
let arr = ["HTML", "JavaScript", "CSS"];
let sort= copySorted(arr);
console.log(sort);
console.log(arr);