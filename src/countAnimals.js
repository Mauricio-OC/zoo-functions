const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;
  const totalResident = {};
  if (!animal) {
    species.forEach((specie) => {
      totalResident[specie.name] = specie.residents.length;
    });
    return totalResident;
  }
  const { specie, sex } = animal;
  const animais = species.find((animalT) => animalT.name === specie);
  if (sex) {
    return animais.residents.filter((elemento) => elemento.sex === sex).length;
  }
  return animais.residents.length;
}

module.exports = countAnimals;
