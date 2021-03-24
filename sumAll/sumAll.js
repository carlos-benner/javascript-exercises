const sumAll = function (start, end) {
    if (
        !Number.isInteger(start) ||
        !Number.isInteger(end) ||
        start < 0 ||
        end < 0
    ) {
        return 'ERROR';
    }
    if (start > end) {
        let tmp = start;
        start = end;
        end = tmp;
    }

    let total = 0;
    for (let i = start; i <= end; i++) {
        total += i;
    }
    return total;
    //return getTriangularNumber(end) - getTriangularNumber(start - 1);
};

const getTriangularNumber = function (num) {
    return num === 0 ? 0 : (num * (num + 1)) / 2;
};

module.exports = sumAll;
