const data = require('../data/zoo_data');

const anima = data.species;
function getAnimalsOlderThan(animal, age) {
  const animal1 = anima.find((element) => (element.name === animal));
  const idade = animal1.residents;
  const AnimalIdade = idade.every((idades) => idades.age >= age);
  return AnimalIdade;
}
module.exports = getAnimalsOlderThan;
