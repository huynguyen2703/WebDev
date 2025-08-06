const person = {
    name: "Huy",
    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
}

person.greet();

const greetFunction = person.greet

const boundGreet = person.greet.bind({name: "John"});
boundGreet();