function aclean(arr) {
    let map = new Map();
    for (let value of arr) {
        let sort = value.toLowerCase().split("").sort().join("");
        map.set(sort,value);
    }
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log( aclean(arr) );
