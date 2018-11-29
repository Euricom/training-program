import formatter from '../currency';

describe('currency.formatter', () => {
  test('format number', () => {
    expect(formatter(123456.123)).toBe('123.456,12 €');
    expect(formatter(456)).toBe('456,00 €');
  });

  test('format string as number', () => {
    expect(formatter('123456.123')).toBe('123.456,12 €');
    expect(formatter('hallo')).toBe('hallo');
  });

  test('format invalid type', () => {
    expect(formatter(true)).toBe(true);
  });
});
