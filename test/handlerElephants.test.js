const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se a funcao nao receber parametros retorna undefined', () => {
    expect(handlerElephants()).toEqual(undefined);
  });
  it('Testa o resultado caso o primeiro parametro seja (names)', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
});
