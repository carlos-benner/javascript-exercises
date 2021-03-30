const fibonacci = function (eleNum) {
    if (!Number.isInteger(+eleNum) || +eleNum < 0) return 'ERROR';
    if (eleNum == 0) return 0;
    if (eleNum == 1) return 1;
    return fibonacci(eleNum - 1) + fibonacci(eleNum - 2);
};

module.exports = fibonacci;
