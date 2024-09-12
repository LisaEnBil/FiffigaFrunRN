import {
  Platform,
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
import { Stack, useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { itemContentStyles } from './(tabs)/styles/item-content.styles';

export default function ItemContent() {
  const router = useRouter();
  const navigation = useNavigation();

  const { views, dispatch } = useContext<ViewsState>(ViewsContext);
  const params = useLocalSearchParams();
  const { id, title, description, categories } = params;


  console.log("title", title)


  useEffect(() => {
    const addView = async () => {

      dispatch({
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
      <Stack.Screen options={{ title: title[0] }} />
      <ThemedView style={itemContentStyles.container}>
        <View style={itemContentStyles.container}>
          {views >= 6 &&
            <View>
              <Text style={itemContentStyles.title}>{title}</Text>
            </View>

          }
          {/* <LikesContainer item={params} /> */}
          <View style={itemContentStyles.content}>
            <Text style={itemContentStyles.title}>{title}</Text>
            <Text style={itemContentStyles.text}>{description}</Text>
          </View>
        </View>
      </ThemedView>
    </>
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
