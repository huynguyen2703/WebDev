let sum = 0;
let i = 0; 

while (i < 6) {
    sum += i;
    i++;
}
console.log(sum);

let countDown = [];
let j = 5;
while (j >= 0) {
    countDown.push(j);
    j--;
}
console.log(countDown);

// let teaCollection = [];
// let tea;
// do {
//     tea = prompt("Enter your favorite tea: ");
//     if (tea !== "stop") {
//         teaCollection.push(tea);
//     }
// } while (tea !== "stop"){
// }

let total = 0;

let k = 1;
do {
    total += k;
    k++;
} while (k <= 3);

let multipledNumer = [];
let numbers = [2,4,6];

for (let index = 0; index < numbers.length; index++) {
    multipledNumer.push(numbers[index]);
}
console.log(multipledNumer);