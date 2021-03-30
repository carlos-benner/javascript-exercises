function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function sum(values) {
    return values.reduce((total, value) => total + value, 0);
}

function multiply(values) {
    return values.reduce((total, value) => total * value, 1);
}

function power(a, b) {
    return a ** b;
}

function factorial(a) {
    if (!Number.isInteger(a) || a < 0) return 'ERROR';
    if (a == 0) return 1;
    return a * factorial(a - 1);
}

module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
