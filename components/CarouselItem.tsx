import { useState } from 'react';
import { Animated, Dimensions, Text, View } from 'react-native';
import { CategoryIcons } from '@/components/Modal/CategoryIcons';
import { RefreshButton } from '@/components/RefreshButton';
import { app } from '@/helpers/translations';
import { Slide } from './Slide';
import { carouselStyles } from './styles/carousel-item.styles';
import { Item } from '@/types/global-types';

const width = Dimensions.get('screen').width;
const cardWidth = (90 / 100) * width;

export const CarouselItem = ({ tips, category }: { tips: Item[], category: string }) => {
  const scrollXOffset = new Animated.Value(0);
  const [slides, setSlides] = useState(tips);

  const scrollHandler = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollXOffset } } }],
    { useNativeDriver: true }
  );

  const momentumEndHandler = (event: any) => {
    Animated.spring(scrollXOffset, {
      toValue: event.nativeEvent.contentOffset.x,
      damping: 10,
      stiffness: 45,
      useNativeDriver: true,
    }).start();
  };

  const handleSetSlides = (newSlides: any) => {
    setSlides(newSlides);
  };
  const categories = app.categories;

  const capitalized =
    categories[category].charAt(0).toUpperCase() +
    categories[category].slice(1);

  return (
    <View style={carouselStyles.wrapper}>
      <View style={carouselStyles.header}>
        <CategoryIcons category={category} color={'#e39d9c'} size={20} />
        <Text style={carouselStyles.headerText}>{capitalized}</Text>
      </View>

      <Animated.View style={carouselStyles.animatedView}>
        <Animated.ScrollView
          onScroll={scrollHandler}
          onMomentumScrollEnd={momentumEndHandler}
          horizontal
          decelerationRate="fast"
          snapToInterval={cardWidth}
          snapToAlignment="start"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={carouselStyles.contentContainer}>
          {slides.map((slide: any, index: number) => {
            return (
              <Slide
                key={index}
                index={index}
                slide={slide}
                scrollX={scrollXOffset}
              />
            );
          })}
        </Animated.ScrollView>
      </Animated.View>
      <RefreshButton
        scrollXOffset={scrollXOffset}
        slides={slides}
        handleSetSlides={handleSetSlides}
        category={category}
      />
    </View>
  );
};
