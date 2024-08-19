import { getRandomInt } from '../../../helpers/helpers';

describe('getRandomInt function', () => {
  test('returns a random integer within the specified range', () => {
    const min = 1;
    const max = 10;
    const randomInt = getRandomInt(min, max);

    expect(randomInt).toBeGreaterThanOrEqual(min);
    expect(randomInt).toBeLessThanOrEqual(max);
  });

  test('returns an integer when min and max are the same', () => {
    const min = 5;
    const max = 5;
    const randomInt = getRandomInt(min, max);

    expect(randomInt).toEqual(min);
  });

  // test('returns NaN if min or max are not numbers', () => {
  //   const min = 'abc';
  //   const max = 10;
  //   const randomInt = getRandomInt(min, max);

  //   expect(randomInt).toBeNaN();
  // });

  test('throws error if max is less than min', () => {
    const min = 10;
    const max = 5;

    expect(() => {
      getRandomInt(min, max);
    }).toThrow('max is less than min');
  });
});
