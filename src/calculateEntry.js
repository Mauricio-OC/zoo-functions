const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, { age }) => {
    if (age < 18) {
      acc.child += 1;
    } else if (age >= 18 && age < 50) {
      acc.adult += 1;
    } else {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const elemento = countEntrants(entrants);
  const { prices: { child: child1, adult: adult1, senior: senior1 } } = data;
  const { child: child2, adult: adult2, senior: senior2 } = elemento;
  const childPrice = child1 * child2;
  const seniorPrice = senior1 * senior2;
  const adultPrice = adult1 * adult2;
  return childPrice + adultPrice + seniorPrice;
}
module.exports = { calculateEntry, countEntrants };
