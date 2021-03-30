const palindromes = function (word) {
    word = word.toLowerCase();
    word = word.replace(/[^0-9a-z]/gi, '');
    return word == word.split('').reverse().join('');
};

module.exports = palindromes;
