const findTheOldest = function (people) {
    let age;
    people.map(function (elem) {
        if (elem.yearOfDeath) {
            console.log(elem.yearOfDeath - elem.yearOfBirth)
            return elem.age = elem.yearOfDeath - elem.yearOfBirth;
        }
        else {
            console.log(2022 - elem.yearOfBirth)
            return elem.age = 2022 - elem.yearOfBirth;
        }
    });
    people.sort(function (a, b) {
        if (a.age > b.age) {
            return -1;
        }
        else if (a.age < b.age) {
            return 1
        }
        else {
            return 0;
        }
    });

    return people[0];
};


// Do not edit below this line
module.exports = findTheOldest;
