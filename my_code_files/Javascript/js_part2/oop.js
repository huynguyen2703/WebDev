// let car = {
//     make: "Toyota",
//     modle: "Camry",
//     year: 2020,
//     start: function() {
//         return `${this.make} car got started in ${this.year}`;
//     }
// }

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let john = new Person("John", 20);
console.log(john.name);

function Animal(type) {
    this.type = type;
}

Animal.prototype.speak = function() {
    return `${this.type} makes a sound`;
}

Array.prototype.huy = function() {
    return `Custom method ${this}`;
}

let myArray = [1,2,3];
console.log(myArray.huy());

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start () {
        return `${this.model} is a car from ${this.model}`;
    }
}

class Car extends Vehicle {
    drive() {
        return `${this.make} : This is an inheritance`;
    }
}

let myCar = new Car("Toyota", "Camry");

