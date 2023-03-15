function sum(a) {
    sum.count += a;
    return sum;
}
sum.count = 0;

sum.toString = function() {
    let count = sum.count;
    sum.count = 0;
    return count;
}

console.log( JSON.parse(sum(1)(2)) ); // 3
console.log( JSON.parse(sum(5)(-1)(2)) ); // 6
console.log( JSON.parse(sum(6)(-1)(-2)(-3)) ); // 0
console.log( JSON.parse(sum(0)(1)(2)(3)(4)(5)) ); // 15
