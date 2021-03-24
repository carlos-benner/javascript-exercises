const leapYears = function (year) {
    if (!Number.isInteger(year) || year < 1) {
        return 'ERROR';
    }
    return year % 4 === 0 && (year % 100 != 0 || year % 400 === 0);
};

module.exports = leapYears;
