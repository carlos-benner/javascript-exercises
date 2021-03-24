const ftoc = function (temp) {
    return roundNumber(((temp - 32) * 5) / 9);
};

const ctof = function (temp) {
    return roundNumber((temp * 9) / 5 + 32);
};

const roundNumber = function (num) {
    return +(Math.round(num + 'e+1') + 'e-1');
};

module.exports = {
    ftoc,
    ctof,
};
