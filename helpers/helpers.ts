import { tips } from './translations';

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max < min) {
    throw new Error('max is less than min');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomNumberArray = (arr: number) => {
  const randomNumbers = Array.from({ length: 5 }, () =>
    getRandomInt(1, arr)
  );
  return randomNumbers;
};

export const getRandomTips = () => {
  const data = Object.values(tips);

  const arr: any[] = [];

  const randomNumbers = getRandomNumberArray(data.length);

  randomNumbers.map((number) => {
    const result = data.find((item: any) => item.id === number);

    arr.length <= 4 && arr.push(result);
  });

  return arr;
};

export const getRandomCategoryTips = (category: string) => {
  const data = Object.values(tips);
  const list = data.filter((item: any) => item.categories.includes(category));

  const randomNumbers = getRandomNumberArray(list.length);

  const arr = randomNumbers
    .filter((number) => number < list.length)
    .map((number) => list[number])
    .slice(0, 5);

  return arr;
};
