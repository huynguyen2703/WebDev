let computer = {cpu: 12};
let lenovo = {
    screen: "HD",
    __proto__: computer,
};
let tomHardware = {};

console.log(lenovo.__proto__);

let genericCar = {
    type: 4
}
let tesla = {
    driver: "AI"
}
Object.setPrototypeOf(tesla, genericCar);
console.log(`tesla`, Object.getPrototypeOf(tesla));