import { CurrencyPipe } from './currency.pipe';

describe('CurrencyPipe', () => {
  let pipe: CurrencyPipe;
  beforeEach(() => {
    pipe = new CurrencyPipe();
  });

  test('Sample nuberic values', () => {
    expect(pipe.transform(100)).toBe('100,00 €');
    expect(pipe.transform(1)).toBe('1,00 €');
    expect(pipe.transform(0)).toBe('0,00 €');
    expect(pipe.transform(1000.236)).toBe('1.000,24 €');
  });

  test('Sample string values', () => {
    expect(pipe.transform('100')).toBe('100,00 €');
    expect(pipe.transform('1')).toBe('1,00 €');
    expect(pipe.transform('0')).toBe('0,00 €');
    expect(pipe.transform('1000.236')).toBe('1.000,24 €');
  });

  test('null values', () => {
    expect(pipe.transform(null)).toBe(null);
    expect(pipe.transform(undefined)).toBe(undefined);
  });

  test('invalid types', () => {
    const now = new Date();
    expect(pipe.transform(now)).toBe(now);
    expect(pipe.transform({})).toEqual({});
    expect(pipe.transform(true)).toEqual(true);
  });
});
