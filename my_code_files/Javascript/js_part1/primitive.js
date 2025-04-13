// Number

let balance = 120;
let anotherBalance = new Number(120);

console.log(typeof(anotherBalance));

// boolean 
let active = true;
let isRealtype = new Boolean(true);

// undefined
let firstName;

console.log(typeof(firstName));

// null 
let hello = null;
console.log(hello);

// String
let myString = "hello";
let myStringP = "Hola";
// string interpolation in JS uses backtick
let greetMessage = `Hello ${myString}`;

let sm1 = Symbol()
let sm3 = Symbol()

console.log(sm1 == sm3);
console.log(typeof(sm1) == typeof(sm3));

