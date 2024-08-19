import React from 'react';
import { Animated, Dimensions, Pressable, Text, View } from 'react-native';
import { Like } from '../../components/Like/Like';
import { useNavigation } from 'expo-router';
import { slideStyles } from './styles/slide.styles';
import { Item } from '@/types/global-types';

const width = Dimensions.get('screen').width;
const cardWidth = (90 / 100) * width;


interface SlideProps { slide: Item, scrollX: Animated.Value, index: number }

export const Slide: React.FC<SlideProps> = ({ slide, scrollX, index }) => {


  const inputRangeX = [
    (index - 1) * cardWidth,
    index * cardWidth,
    (index + 1) * cardWidth,
  ];

  const scaleInterpolate = scrollX.interpolate({
    inputRange: inputRangeX,
    outputRange: [0.9, 1, 0.9],
    extrapolate: 'clamp',
  });

  const translateXInterpolate = scrollX.interpolate({
    inputRange: inputRangeX,
    outputRange: [-cardWidth * 0.01, 0, cardWidth * 0.01],
    extrapolate: 'clamp',
  });

  const animationStyle = {
    transform: [
      {
        scale: scaleInterpolate,
      },
      {
        translateX: translateXInterpolate,
      },
    ],
  };

  return (
    <Pressable
      onPress={() =>
        navigation.navigate('ItemContent', {
          item: slide,
        })
      }>
      <Animated.View
        key={index}
        style={[slideStyles.container, animationStyle]}>
        <View style={slideStyles.header}>
          <Text style={slideStyles.title}>{slide.title}</Text>
          <Like item={slide} size={30} />
        </View>

        <Text style={slideStyles.description}>
          {slide.description.length > 300
            ? slide.description.slice(0, 250) + '...'
            : slide.description}
        </Text>
      </Animated.View>
    </Pressable>
  );
};
