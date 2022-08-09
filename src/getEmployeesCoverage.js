const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const rotina = () => employees.map((element) => {
  const animals = species.filter((element2) =>
    element.responsibleFor.find((element3) => element3 === element2.id));
  const informacao = {
    id: element.id,
    fullName: `${element.firstName} ${element.lastName}`,
    species: animals.map((element2) => element2.name),
    locations: animals.map((element3) => element3.location),
  };
  return informacao;
});

function getEmployeesCoverage(objeto) {
  if (!objeto) {
    return rotina();
  }
  const objetoValue = Object.values(objeto).toString();
  const employee = employees.find((element) => Object.values(element).includes(objetoValue));
  if (employee === undefined) {
    throw new Error('Informações inválidas');
  }
  const animals = species
    .filter((element) => employee.responsibleFor.find((eleid) => eleid === element.id));
  const informacoes = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: animals.map((element2) => element2.name),
    locations: animals.map((element3) => element3.location),
  };
  return informacoes;
}

module.exports = getEmployeesCoverage;
