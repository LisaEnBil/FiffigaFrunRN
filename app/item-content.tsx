import {
  Button,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Like } from '../components/Like/Like';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ViewsContext, ViewsState } from '@/contexts/ViewsContext';
import { Item } from '@/types/global-types';
import { Stack, useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { itemContentStyles } from './(tabs)/styles/item-content.styles';
import { app, } from '@/helpers/translations';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { RewardBanner } from '@/components/RewardBanner';

export default async function ItemContent() {
  const router = useRouter();
  const navigation = useNavigation();

  const { views, dispatch } = useContext<ViewsState>(ViewsContext);
  const params = useLocalSearchParams();
  const { id, title, description, categories } = params;

  const [item, setItem] = useState<Item>({} as Item);

  const createItem = useCallback(() => {
    const i: Item = {
      id: id as unknown as number,
      categories: categories as string[],
      title: title as string,
      description: description as string
    };
    setItem(i);
  }, [id, categories, title, description]);

  const addView = useCallback(() => {
    dispatch({
      type: 'add',
      payload: {
        views: views,
      },
    });
  }, [dispatch]);

  useEffect(() => {
    createItem();
    addView();
  }, [createItem, addView]);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#97B1A6' }}>
      <View style={{ flex: 1, backgroundColor: '#97B1A6' }}>
        <Stack.Screen options={
          {
            headerStyle: {
              backgroundColor: '#97B1A6'
            },
            headerShadowVisible: false,
            headerTitle: "",
            headerBackTitle: app.buttons.back
          }} />
        <View style={itemContentStyles.container}>
          <LikesContainer item={item} />
          <View style={itemContentStyles.content}>
            <Text style={itemContentStyles.title}>{title}</Text>
            <Text style={itemContentStyles.text}>{description}</Text>
          </View>
        </View>
        {views >= 6 &&
          <BlurView intensity={50} style={itemContentStyles.blurContainer}>
            <Text style={itemContentStyles.text}>"HELLO!!!!!</Text>
            <RewardBanner />
            {/* <Button title="" onPress={() => RewardBanner}></Button> */}
          </BlurView>
        }
      </View>
    </SafeAreaView>
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
