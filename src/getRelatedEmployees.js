const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employe) => (
    employe.managers.some((manager) => manager === id)
  ));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

module.exports = { isManager, getRelatedEmployees };
