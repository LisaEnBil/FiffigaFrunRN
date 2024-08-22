import { Text, TouchableOpacity, View } from 'react-native';
import { Like } from '../Like/Like';
import { listItemStyles } from './list-item.styles';
import { Item } from '@/types/global-types';
import { router, Stack } from 'expo-router';


interface ListItemProps { item: Item, index: number }


export const ListItem: React.FC<ListItemProps> = ({ item }) => {

  return (
    <View>
      <Stack.Screen
        options={{
          title: item.title,
        }}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          router.setParams({ name: 'ItemContent' });
        }}
        style={listItemStyles.container}>
        <View style={listItemStyles.likeContainer}>
          <Like item={item} size={24} />
        </View>
        <View style={listItemStyles.textContainer}>
          <Text style={listItemStyles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>

    </View>

  );
};
