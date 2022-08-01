const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se a funcao nao receber parametros retorna undefined', () => {
    expect(handlerElephants()).toEqual(undefined);
  });
  it('Testa o resultado caso o primeiro parametro seja (names)', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Testa o resultado count retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa funcao para (averageAge) se retorna resultado experado', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
});
