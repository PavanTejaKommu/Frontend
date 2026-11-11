function add(val , callback) {
    callback(val + 2);
}

function multiply(val , callback) {
    callback(val * 5);
}   

function subtract(val , callback) {
    callback(val - 2);
}

function divide(val , callback) {
    callback(val / 2);
}

sum(10, (addres)=>console.log(addres));

