import { Button, SectionList, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import BigList from 'react-native-big-list';
import { ListItem } from '../ListItem/ListItem';
import { listStyles } from './list.styles';
import { Item } from '@/types/global-types';
import { Link, Stack, useNavigation } from 'expo-router';
import { listItemStyles } from '../ListItem/list-item.styles';



interface ListProps { data: Item[] }


export const List: React.FC<ListProps> = ({ data }) => {
  const extractHeaderKey = (item: Item) => {
    return item.title.charAt(0).toUpperCase();
  };


  const getSections = data.reduce((acc: { title: string, data: Item[] }[], item) => {
    const key = extractHeaderKey(item);
    const existingSection = acc.find((section) => section.title === key);

    if (existingSection) {
      existingSection.data.push(item);
    } else {
      acc.push({ title: key, data: [item] });
    }

    return acc;
  }, []);



  return (
    <SectionList
      sections={getSections}
      keyExtractor={(item, index) =>
        item.id.toString()
      }
      renderItem={({ item }) => (
        <ListItem
          item={item}
          key={item.id}
        />


      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={listStyles.sectionHeader}>
          <Text style={listStyles.sectionHeaderText}>{title}</Text>
        </View>
      )}
    />
  );
}


// export const List: React.FC<ListProps> = ({ data }) => {


//   const renderItem = ({ item }: { item: Item }) => {
//     return (

//       <ListItem
//         item={item}
//         index={item.id}
//         key={item.id}
//       />



//     );
//   };

//   const extractHeaderKey = (item: Item) => {
//     const capitalized = item.title.charAt(0).toUpperCase();

//     return capitalized;
//   };

//   const dataSections: Item[][] = [];
//   const dataSectionHeaders: string[] = [];

//   const getSections = data.reduce((acc: any[], item) => {
//     const key = extractHeaderKey(item);
//     const existingSection = acc.find((section) => section.title === key);

//     if (existingSection) {
//       existingSection.data.push(item);
//     } else {
//       acc.push({ title: key, data: [item] });
//     }

//     return acc;
//   }, []);

//   getSections.map((section) => {
//     dataSections.push(section.data);
//     dataSectionHeaders.push(section.title);
//   });

//   const ITEM_HEIGHT = 120;

//   return (
//     <SectionList
//       sections={dataSections}
//       keyExtractor={(item, index) => item + index}
//       renderItem={({ item }) => (
//         <View style={styles.item}>
//           <Text style={styles.title}>{item}</Text>
//         </View>
//       )}
//       renderSectionHeader={({ section: { title } }) => (
//         <Text style={styles.header}>{title}</Text>
//       )}
//     />

//   );
// };
