import { useMemo } from 'react';
import { tips } from './translations';
import { Item } from '@/types/global-types';

export const categories = () => {
  const data: Item[] = Object.values(tips);
  const categories = useMemo(() => {
    const uniqueCategories: string[] = [];

    data.forEach((item: Item) => {
      Object.values(item.categories).forEach((category) => {
        if (!uniqueCategories.includes(category) && category.length > 2) {
          uniqueCategories.push(category);
        }
      });
    });

    return uniqueCategories;
  }, [data]);

  return categories;
};
