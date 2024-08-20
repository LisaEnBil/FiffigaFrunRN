import { useContext, useMemo } from 'react';

import { LikesContext } from '../contexts/LikesContext';
import { tips } from '../helpers/translations';
import { Item, LikedItem } from '@/types/global-types';

export const useGetLikedItems = () => {
  const { likes } = useContext(LikesContext);
  const data = Object.values(tips);

  const likedItems = useMemo(() => {
    return Object.keys(likes).reduce((carry, itemTitle) => {
      if (likes[itemTitle]) {
        const item = data.find((i: any) => i.title === itemTitle);
        if (item) {
          carry.push(item);
        }
      }

      return carry;
    }, []);
  }, [likes]);

  likedItems.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });

  return likedItems;
};
