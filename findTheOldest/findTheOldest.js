let findTheOldestWithForEach = function (peopleArray) {
    let oldestPerson = peopleArray[0];
    peopleArray.forEach((person) => {
        if (getPersonAge(oldestPerson) < getPersonAge(person))
            oldestPerson = person;
    });
    return oldestPerson;
};

let findTheOldestWithSort = function (peopleArray) {
    return peopleArray.sort(
        (person1, person2) => getPersonAge(person2) - getPersonAge(person1)
    )[0];
};

function getPersonAge(person) {
    return person.yearOfDeath
        ? person.yearOfDeath - person.yearOfBirth
        : 2021 - person.yearOfBirth;
}

let findTheOldestWithReduce = function (peopleArray) {
    return peopleArray.reduce((oldestPerson, person) => {
        if (getPersonAge(oldestPerson) < getPersonAge(person)) {
            oldestPerson = person;
        }
        return oldestPerson;
    });
};

findTheOldest = findTheOldestWithReduce;

module.exports = findTheOldest;
