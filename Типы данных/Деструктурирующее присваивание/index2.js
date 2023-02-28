let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
  };
  let max = 0;
  let Name = null;
  function topSalary(salaries) {
    for(let [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
          max = salary;
          Name = name;
        }
      }
    return Name;
  };
console.log(topSalary(salaries));