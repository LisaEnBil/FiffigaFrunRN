import { Text, View } from 'react-native';
import BigList from 'react-native-big-list';
import { ListItem } from '../ListItem/ListItem';
import { listStyles } from './list.styles';
import { Item } from '@/types/global-types';
import { Stack } from 'expo-router';

interface ListProps { data: Item[] }


export const List: React.FC<ListProps> = ({ data }) => {
  const renderItem = ({ item }: { item: Item }) => {
    return (
      <ListItem
        item={item}
        index={item.id}
        key={item.id}
      />
    );
  };

  const extractHeaderKey = (item: Item) => {
    const capitalized = item.title.charAt(0).toUpperCase();

    return capitalized;
  };

  const dataSections: Item[][] = [];
  const dataSectionHeaders: string[] = [];

  const getSections = data.reduce((acc: any[], item) => {
    const key = extractHeaderKey(item);
    const existingSection = acc.find((section) => section.title === key);

    if (existingSection) {
      existingSection.data.push(item);
    } else {
      acc.push({ title: key, data: [item] });
    }

    return acc;
  }, []);

  getSections.map((section) => {
    dataSections.push(section.data);
    dataSectionHeaders.push(section.title);
  });

  const ITEM_HEIGHT = 120;

  return (
    <BigList
      sections={dataSections}
      renderItem={renderItem}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={listStyles.contentContainer}
      indicatorStyle="white"
      itemHeight={100}
      renderFooter={10}
      renderHeader={10}
      getItemLayout={(data, index) => ({
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index,
      })}
      renderSectionHeader={(section) => {
        return (
          <View style={listStyles.sectionHeader}>
            <Text style={listStyles.sectionHeaderText}>
              {dataSectionHeaders[section]}
            </Text>
          </View>
        );
      }}
      sectionHeaderHeight={40}
    />
  );
};
