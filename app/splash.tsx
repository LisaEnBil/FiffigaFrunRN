import {
  Comfortaa_400Regular,
  Comfortaa_700Bold,
} from '@expo-google-fonts/comfortaa';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Text,
  View,
} from 'react-native';
import { appTitle } from '../helpers/translations';
import { splashStyle } from '@/app/(tabs)/styles/splash.styles';


interface SplashProps {
  appIsReady: boolean,
  text: string
}

export const Splash: React.FC<SplashProps> = ({ appIsReady, text }) => {
  const scaleAnimate = useRef(new Animated.Value(0)).current;
  const [isToggle, setIsToggle] = useState(false);
  const scaleInterpolate = scaleAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 2],
  });

  useEffect(() => {
    if (!appIsReady) {
      animateElement();
    }
  });

  const animateElement = () => {
    Animated.timing(scaleAnimate, {
      toValue: isToggle ? 1 : 0,
      duration: 950,
      useNativeDriver: true,
    }).start(() => {
      setIsToggle(!isToggle);
    });
  };

  let [fontsLoaded, fontError] = useFonts({
    Comfortaa_700Bold,
    Comfortaa_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const animationStyle = {
    transform: [
      {
        scale: scaleInterpolate,
      },
    ],
  };

  return (
    <View style={splashStyle.container}>
      <View style={splashStyle.innerContainer}>
        <Text style={splashStyle.title}>{appTitle.title}</Text>

        <Animated.Image
          source={require('@/assets/images/spraybottle.png')}
          style={[splashStyle.image, animationStyle]}
        />
        <Text style={splashStyle.text}>{text}</Text>
      </View>
    </View>

  );
};

// export const SafeArea = StyleSheet.create({
//   Android: {
//     flex: 1,
//     backgroundColor: '#2d4e53',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//   },
// });
