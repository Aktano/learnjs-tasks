function readNumber() {
    let a;
    do {
        a = prompt("Введите число", '');
      } while ( !isFinite(a) );
    if (a === null || a === '') {
        return null;
    }
      return +a;
    }

alert (readNumber())