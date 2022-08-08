const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const adulto = entrants.filter((entrantsAdulto) => entrantsAdulto
    .age >= 18 && entrantsAdulto.age < 50);
  const crianca = entrants.filter((entrantsCrianca) => entrantsCrianca.age < 18);
}

function calculateEntry(entrants) {

}

module.exports = { calculateEntry, countEntrants };
