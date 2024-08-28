import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useLayoutEffect, useState } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { LikesProvider } from '@/contexts/LikesContext';
import { UnsubscribedUserProvider } from '@/contexts/ViewsContext';
import { getRandomInt } from '@/helpers/helpers';
import { Alert, Platform } from 'react-native';
import Purchases from 'react-native-purchases';
import { Comfortaa_300Light, Comfortaa_400Regular, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa';
import { arr } from '@/locales/splash-text';
import { Splash } from './splash';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

Purchases.setLogLevel(Purchases.LOG_LEVEL.VERBOSE);



export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded, fontError] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Comfortaa_700Bold,
    Comfortaa_400Regular,
    Comfortaa_300Light,
  });

  useEffect(() => {
    if (fontError) {
      console.error('Error loading fonts:', fontError);
    }
  }, [fontError]);

  useEffect(() => {
    console.log('App is ready:', appIsReady);
    console.log('Fonts loaded:', fontsLoaded);
  }, [appIsReady, fontsLoaded]);

  useLayoutEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2500));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const randomInt = getRandomInt(1, arr.length);
  const item = arr.find((item) => item.id === randomInt);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      if (!process.env.EXPO_PUBLIC_RC_IOS) {
        Alert.alert(
          'Error configuring RC',
          'RevenueCat API key for iOS not provided'
        );
      }
      process.env.EXPO_PUBLIC_RC_IOS && Purchases.configure({ apiKey: process.env.EXPO_PUBLIC_RC_IOS });
    }

  }, []);

  return (
    <LikesProvider>
      <UnsubscribedUserProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
            <Stack.Screen name="item-content" />
          </Stack>
        </ThemeProvider>
      </UnsubscribedUserProvider>
    </LikesProvider>
  )
}



//else if (Platform.OS === 'android') {
// if (!process.env.EXPO_PUBLIC_RC_ANDROID) {
//   Alert.alert(
//     'Error configuring RC',
//     'RevenueCat API key for Android not provided'
//   );
// }

// Purchases.configure({
//   apiKey: process.env.EXPO_PUBLIC_RC_ANDROID,
// });
// }
//Purchases.getOfferings().then(console.log());