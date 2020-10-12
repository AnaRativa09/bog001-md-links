const { getStats, getStatsValidate } = require('../src/functions/stats');
const mocks = require('./docs/data-mock.js');

/* ---------- getStats----------*/
describe('getStats', () => {
  it('Debería ser una función', () => {
    expect(typeof getStats).toBe('function');
  });

  it('Retorna objeto {total, unique} al analizar arr>obj con links', () => {
    expect(getStats(mocks.dataLinksInfo)).toEqual({ Total: 6, Unique: 5 });
  });
});

/* ---------- getStatsValidate ----------*/
describe('getStatsValidate', () => {
  it('Debería ser una función', () => {
    expect(typeof getStatsValidate).toBe('function');
  });

  it('Retorna objeto {total, unique} al analizar arr>obj con links', () => {
    expect(getStatsValidate(mocks.mdLinksValidateTrue)).toEqual({ Total: 8, Unique: 7, Broken: 3 });
  });
});
