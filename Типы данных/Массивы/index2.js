
function sumInput() {
    let arr = [];
    while(true) {
        let a = prompt('Введите число', 0);

        if(a == '' || a == null || !isFinite(a)) {
            break;
        }

        arr.push(+a);
    };

    let sum = 0;
    for (let i of arr) {
       sum += i;
    }
    return sum;
}

alert(sumInput());