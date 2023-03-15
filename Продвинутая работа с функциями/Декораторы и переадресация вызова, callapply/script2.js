
function delay(f, ms) {
    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
}


let f1000 = delay(console.log, 1000);
let f3000 = delay(console.log, 3000);

f1000('test');
f3000('test');
