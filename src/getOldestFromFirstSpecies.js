const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animal1 = employees.find((people) => people.id === id)
    .responsibleFor[0];
  const animal = species.find((spec) => animal1 === spec.id).residents;
  const older = animal.sort((a, b) => b.age - a.age);
  return Object.values(older[0]);
}

module.exports = getOldestFromFirstSpecies;
