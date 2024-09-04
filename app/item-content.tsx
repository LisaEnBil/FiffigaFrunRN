import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { BackButton } from '../components/Buttons/BackButton';
import { Like } from '../components/Like/Like';
import { useContext, useEffect } from 'react';
import { ViewsContext, ViewsState } from '@/contexts/ViewsContext';
import { Item } from '@/types/global-types';
import { Link, Stack } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { itemContentStyles } from './(tabs)/styles/item-content.styles';

export default function ItemContent({ item }: { item: Item }) {

  const { views, dispatch } = useContext<ViewsState>(ViewsContext);

  useEffect(() => {
    const addView = async () => {

      await dispatch({
        type: 'add',
        payload: {
          views: views,
        },
      });
    }
    addView();

  }, []);

  return (
    <>
      <Stack.Screen options={{ title: item.title }} />
      <ThemedView style={itemContentStyles.container}>
        {/* <Link href="/(tabs)/home" >
          <ThemedText type="link">Get back home bitch!</ThemedText>
        </Link> */}
        <View style={itemContentStyles.container}>
          {views >= 6 &&
            <View>
              <Text style={itemContentStyles.title}>{item.title}</Text>
            </View>

          }
          <LikesContainer item={item} />
          <View style={itemContentStyles.content}>
            <Text style={itemContentStyles.title}>{item.title}</Text>
            <Text style={itemContentStyles.text}>{item.description}</Text>
          </View>
        </View>
      </ThemedView>
    </>


    // <SafeAreaView style={[SafeArea.Android, { flex: 1 }]}>
    //   <BackButton />
    //   <View style={itemContentStyles.container}>
    //     {views >= 6 &&
    //       <View>
    //         <Text style={itemContentStyles.title}>{item.title}</Text>
    //       </View>

    //     }
    //     <LikesContainer item={item} />
    //     <View style={itemContentStyles.content}>
    //       <Text style={itemContentStyles.title}>{item.title}</Text>
    //       <Text style={itemContentStyles.text}>{item.description}</Text>
    //     </View>
    //   </View>
    // </SafeAreaView>
  );
};

export const SafeArea = StyleSheet.create({
  Android: {
    flex: 1,
    backgroundColor: '#97B1A6',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

const LikesContainer = ({ item }: { item: Item }) => {
  return (
    <View style={itemContentStyles.likeContainer}>
      <Like item={item} size={32} />
    </View>
  );
};
