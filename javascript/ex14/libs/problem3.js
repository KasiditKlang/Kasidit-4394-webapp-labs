function add(n, p) {
    return n + p;
}

function subtract(n, p) {
    return n - p;
}

function multiply(n, p) {
    return n * p;
}

function divide(n, p) {
    return n / p;
}

function calculator(n, p, z) {
    return z(n, p); 
}

console.log(calculator(5, 3, add));  
console.log(calculator(5, 3, subtract));  
console.log(calculator(5, 3, multiply)); 
console.log(calculator(6, 3, divide));    
