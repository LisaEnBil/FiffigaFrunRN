import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useContext } from 'react';
import { Pressable } from 'react-native';
import { LikesContext } from '../../contexts/LikesContext';
import { likeStyles } from './like.styles';
import { Item } from '@/types/global-types';

interface LikeProps {
  item: Item,
  size: number
}

export const Like: React.FC<LikeProps> = ({ item, size }) => {
  const { likes, dispatch } = useContext(LikesContext);

  const icon = likes[item.title] ? 'favorite' : 'favorite-outline';

  const addItemToList = async () => {

    if (likes[item.title]) {
      dispatch({
        type: 'remove',
        payload: {
          itemTitle: item.title,
        },
      });
    } else {
      dispatch({
        type: 'add',
        payload: {
          itemTitle: item.title,
        },
      });
    }
  };

  return (
    <Pressable style={likeStyles.likeContainer} onPress={addItemToList}>
      <MaterialIcons name={icon} size={size} color="#e39d9c" />
    </Pressable>
  );
};