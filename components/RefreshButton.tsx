import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet } from 'react-native';
import { getRandomCategoryTips } from '../helpers/helpers';
import { Item } from '@/types/global-types';

interface RefreshButtonProps {
  scrollXOffset: any;
  slides: Item[];
  handleSetSlides: (newSlides: any[]) => void;
  category: string;

}

export const RefreshButton: React.FC<RefreshButtonProps> = ({
  scrollXOffset,
  slides,
  handleSetSlides,
  category,
}) => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  const [currentScrollOffset, setCurrentScrollOffset] = useState(null);

  useEffect(() => {
    currentScrollOffset && scrollXOffset.setValue(currentScrollOffset);
  }, [currentScrollOffset, slides]);

  const startAnimation = () => {
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start(() => rotateValue.setValue(0));
  };

  const onPressHandler = () => {
    startAnimation();
    setCurrentScrollOffset(scrollXOffset._value);

    const c = async () => {
      await new Promise((resolve) => setTimeout(resolve, 200));
      const newtips = getRandomCategoryTips(category);

      handleSetSlides(newtips);
    };
    c();
  };

  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyles = {
    transform: [{ rotate: rotateInterpolate }],
  };
  return (
    <Pressable
      style={refreshButtonStyles.pressable}
      onPress={onPressHandler}>
      <Animated.View style={[animatedStyles]}>
        <MaterialIcons name="refresh" size={30} color={'#ffffff'} />
      </Animated.View>
    </Pressable>
  );
};

export const refreshButtonStyles = StyleSheet.create({
  pressable: {
    borderRadius: 50,
    marginRight: '5%',
    alignItems: 'flex-end',
    paddingVertical: 15,
  },
});
