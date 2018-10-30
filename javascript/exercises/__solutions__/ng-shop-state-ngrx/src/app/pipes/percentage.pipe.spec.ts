import { PercentagePipe } from './percentage.pipe';

describe('CurrencyPipe', () => {
  let pipe: PercentagePipe;
  beforeEach(() => {
    pipe = new PercentagePipe();
  });

  test('Sample nuberic values', () => {
    expect(pipe.transform(100)).toBe('100%');
    expect(pipe.transform(1000)).toBe('1.000%');
    expect(pipe.transform(0)).toBe('0%');
    expect(pipe.transform(-50)).toBe('-50%');
  });

  test('Sample string values', () => {
    expect(pipe.transform('100')).toBe('100%');
    expect(pipe.transform('1000')).toBe('1.000%');
    expect(pipe.transform('0')).toBe('0%');
    expect(pipe.transform('-50')).toBe('-50%');
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
