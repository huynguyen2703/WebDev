function makeTea (typeOfTea) {
    return `Making ${typeOfTea}`;
}

console.log(makeTea("green tea"));

function orderTea (teaType) {

    function confirmOrder () {
        return `Order confirmed for ${teaType}`;
    }
    return confirmOrder();
}

console.log(orderTea("chai"));

// Arrow function
const calculateTotal = (price, quantity) =>  {
    return price * quantity
}
let totalCost = calculateTotal(499, 100);

console.log(totalCost);

function makeTea(teaType) {
    return teaType
}
function processTeaOrder (makeTea) {
    return makeTea("ear grey");
}

let order = processTeaOrder(makeTea);
console.log(order);