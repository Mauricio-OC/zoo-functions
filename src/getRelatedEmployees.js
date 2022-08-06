const { employees } = require('../data/zoo_data');

function isManager(id) {
  const manager1 = employees.some((manager) => manager.managers.includes(id));
  return manager1;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const employe = employees.filter((element) => element.managers.includes(managerId));
    const names = employe.map((element) => `${element.firsName} ${element.lastName}`)
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
