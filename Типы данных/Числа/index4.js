function randomInteger(min, max) {
    let result = min + Math.random() * (max + 1 - min);
    return Math.floor(result);
}
alert( randomInteger(1, 3) );