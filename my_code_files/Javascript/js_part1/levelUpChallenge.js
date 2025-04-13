let teas = ["green tea", "black tea", "chai", "oolong"];

let selectedTea = []

for (let i = 0; i < teas.length; i++) {
    if (teas[i] === 'chai') {
        break;
    }
    selectedTea.push(teas[i]);    
}
 console.log(selectedTea)

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = []
 for (let i = 0; i < cities.length; i++) {
     if (cities[i] === "Paris") {
         continue;
     }
     visitedCities.push(cities[i]);  
 }

 console.log(visitedCities);

 let numbers = [1,2,3,4,5]
 let smallNumbers = []

 for (const element of numbers) {
     if (element === 4) {
         smallNumbers.push(element);
        break;
     }
 }

 let citiesPopulation = {
     "London": 890000,
     "NewYork": 840000,
     "Paris": 220000,
     "Berlin": 350000
 }
 let cityPopulations = {};

 for (const city in citiesPopulation) {
     cityPopulations[city] = citiesPopulation[city];
 }
 console.log(cityPopulations);

 let teaCol = ["earl grey", "green tea",  "chai", "oolong tea"];

 let availableTeas = [];

 teaCol.forEach(tea =>  {
    if (tea === "chai") {
        return;
    }
    availableTeas.push(tea);
})




