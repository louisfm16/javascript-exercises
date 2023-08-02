const findTheOldest = function(people) {
    return people.reduce((oldestP, currP) => findPersonAge(currP) > findPersonAge(oldestP) ? currP : oldestP);
};

const findPersonAge = function(person) {
    if(!person.hasOwnProperty('yearOfDeath'))
        person.yearOfDeath = (new Date().getFullYear());

    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
