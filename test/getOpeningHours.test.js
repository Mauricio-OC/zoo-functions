const getOpeningHours = require('../src/getOpeningHours');
// {
// Tuesday: { open: 8, close: 6 },
// Wednesday: { open: 8, close: 6 },
// Thursday: { open: 10, close: 8 },
// Friday: { open: 10, close: 8 },
// Saturday: { open: 8, close: 10 },
// Sunday: { open: 8, close: 8 },
// Monday: { open: 0, close: 0 },
// }
describe('Testes da função getOpeningHours', () => {
  it('Verifica ao receber Monday e 09:00-AM retorna string The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  it('Verifica ao receber Wednesday e 09:00-PM retorna string The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
  it('Verifica ao receber Tuesday e 09:00-AM retorna string The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  it('Verifica ao receber Thu e 09:00-AM retorna o erro The day must be valid. Example: Monday', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
});
