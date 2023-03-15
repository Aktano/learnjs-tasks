// function printNumbers(from, to) {
//   let x = from;
//   let timer = setInterval(function() {
//     console.log(x);
//     if (x == to) {
//       clearInterval(timer);
//     }
//     x++;
//   }, 1000);
// }

// printNumbers(1, 5);

function printNumbers(from, to) {
    let x = from;
    setTimeout(function f() {
      console.log(x);
      if (x < to) {
        setTimeout(f,1000);
      }
      x++;
    }, 1000);
  }
  
  printNumbers(1, 5);