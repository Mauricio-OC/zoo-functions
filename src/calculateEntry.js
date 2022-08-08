const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const adulto = entrants.filter((entrantsAdulto) => entrantsAdulto
    .age >= 18 && entrantsAdulto.age < 50);
  const crianca = entrants.filter((entrantsCrianca) => entrantsCrianca.age < 18);
  const idoso = entrants.filter((entrantsSenior) => entrantsSenior.age >= 50);
  return { crianca: crianca.length, adulto: adulto.length, idoso: idoso.length };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) { return 0; }
  const Total = countEntrants(entrants);
  const precoSenior = prices.senior * Total.senior;
  const precoAdulto = prices.adult * Total.adult;
  const precoCrianca = prices.child * Total.child;
  return precoAdulto + precoCrianca + precoSenior;
}
module.exports = { calculateEntry, countEntrants };
