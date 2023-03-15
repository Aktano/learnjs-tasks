function inBetween(a, b) {
    return function(x) {
        if (x >= a && x <= b ) {
            return true;
        };
    };
}

function inArray(arr){
    return function(x){
        if (arr.includes(x)){
            return true;
        };
    };
};

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6)));
console.log( arr.filter(inArray([1, 2, 10])) );