import { Text, TouchableOpacity, View } from 'react-native';
import { Like } from '../Like/Like';
import { listItemStyles } from './list-item.styles';
import { Item } from '@/types/global-types';
import { Link, router, Stack, useLocalSearchParams, useRouter } from 'expo-router';


interface ListItemProps { item: Item }


export const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const router = useRouter();

  return (
    <Link href={{ pathname: '/item-content', params: item }} >
      <View style={listItemStyles.container}>
        <View style={listItemStyles.likeContainer}>
          <Like item={item} size={24} />
        </View>
        <View style={listItemStyles.textContainer}>
          <Text style={listItemStyles.title}>{item.title}</Text>
        </View>
      </View >
    </Link>

  );
};
