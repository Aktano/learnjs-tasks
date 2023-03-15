function account(name) {
    this.name = name;
}
let user = new account('Vic');
let user2 = new user.constructor('Din');
console.log( user2.name );
