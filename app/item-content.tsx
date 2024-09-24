import {
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
import { ThemedView } from '@/components/ThemedView';
import { itemContentStyles } from './(tabs)/styles/item-content.styles';
import { app, } from '@/helpers/translations';

export default function ItemContent() {
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
    <View style={{ flex: 1, backgroundColor: '#97B1A6', }}>
      <Stack.Screen options={
        {
          headerStyle: {
            backgroundColor: '#97B1A6'
          },
          headerShadowVisible: false,
          headerTitle: "",
          headerBackTitle: app.buttons.back
        }} />
      <ThemedView style={itemContentStyles.container}>
        <View style={itemContentStyles.container}>
          {views >= 6 &&
            <View>
              <Text style={itemContentStyles.title}>Placeholder for Max views</Text>
            </View>

          }
          <LikesContainer item={item} />
          <View style={itemContentStyles.content}>
            <Text style={itemContentStyles.title}>{title}</Text>
            <Text style={itemContentStyles.text}>{description}</Text>
          </View>
        </View>
      </ThemedView>
    </View>
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
