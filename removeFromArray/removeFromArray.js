const removeFromArray = function () {
    let [arr, ...elements] = arguments;
    elements.forEach(function (el) {
        let index = arr.indexOf(el);
        if (index > -1) {
            arr.splice(index, 1);
        }
    });
    return arr;
};
module.exports = removeFromArray;
