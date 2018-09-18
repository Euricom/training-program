import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe: FilterPipe;
  beforeEach(() => {
    pipe = new FilterPipe();
  });

  test('Array filtering', () => {
    const testArray = [
      { id: 123, name: 'abc' },
      { id: 321, name: 'aaa' },
      { id: 999, name: 'bbb' },
    ];

    // act
    const result = pipe.transform(testArray, 'name', 'abc');

    // assert
    expect(result.length).toEqual(1);
  });

  test('empty array', () => {
    const testArray = [];

    // act
    const result = pipe.transform([], 'name', 'abc');

    // assert
    expect(result.length).toEqual(0);
  });

  test('none object array', () => {
    const testArray = [0, 1, 3];

    // act
    const result = pipe.transform(testArray, 'name', 'abc');

    // assert
    expect(result.length).toEqual(0);
  });
});
