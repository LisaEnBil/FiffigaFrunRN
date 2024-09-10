import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { CarouselItem } from '../../components/CarouselItem';
import { getRandomCategoryTips } from '../../helpers/helpers';
import { Item } from '@/types/global-types';
import { GetGoodToHaveList } from '@/components/GoodTohaveList/GetGoodToHaveList';

export default function Home({ }) {
  const randomFoodtips: any[] = getRandomCategoryTips('food');
  const randomCleaningtips: any[] = getRandomCategoryTips('cleaning');
  const randomAnimaltips: any[] = getRandomCategoryTips('animals');

  return (
    <SafeAreaView style={{ backgroundColor: '#2d4e53', flex: 1 }}>
      <ScrollView>
        <CarouselItem
          tips={randomFoodtips}
          category={'food'}
        />
        <GetGoodToHaveList />
        <CarouselItem
          tips={randomCleaningtips}
          category={'cleaning'}
        />
        <CarouselItem
          tips={randomAnimaltips}
          category={'animals'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export const dividerStyles = StyleSheet.create({
  containerSmall: {
    width: '100%',
    height: 0.25,
    alignItems: 'center',
  },
  containerBig: {
    width: '100%',
    height: 0.5,
    alignItems: 'center',
  },
  big: {
    width: '90%',
    height: 0.5,
    backgroundColor: '#97B1A6',
  },
  small: {
    width: '90%',
    height: 0.25,
    backgroundColor: '#97B1A6',
  },
});
