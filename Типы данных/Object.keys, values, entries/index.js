let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

let sum = 0;
function sumSalaries(salaries) {
    for (i of Object.values(salaries))
    sum += i;
    return sum;
}

console.log( sumSalaries(salaries) );