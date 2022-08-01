const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const employe = data.employees;
  return employe.find((objeto) =>
    objeto.firstName === employeeName || objeto.lastName === employeeName);
}

module.exports = getEmployeeByName;
