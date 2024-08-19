import { MaterialIcons } from '@expo/vector-icons';
import { useRef } from 'react';
import { Animated, Text, TouchableWithoutFeedback, View } from 'react-native';
import { app } from '../helpers/translations';
import { arrowStyles } from './styles/animated-arrow.styles';


interface AnimatedArrowProps { handleIsRotated: (value: boolean) => void, isRotated: boolean }

export const AnimatedArrow: React.FC<AnimatedArrowProps> = ({ handleIsRotated, isRotated }) => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(rotateValue, {
      toValue: isRotated ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start(() => handleIsRotated(!isRotated));
  };

  const onPressHandler = () => {
    startAnimation();
  };

  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  const animatedStyles = {
    transform: [{ rotate: rotateInterpolate }],
  };

  return (
    <TouchableWithoutFeedback onPress={onPressHandler} >
      <View style={arrowStyles.pressable}>
        <Text style={[arrowStyles.title, arrowStyles.text]}>
          {app.home.text}
        </Text>
        < Animated.View style={[animatedStyles]} >
          <MaterialIcons icon="arrow-forward-ios" size={25} color={'#ffffff'} />
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>

  );
};
