import { StyleSheet } from 'react-native';

export const splashStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#2d4e53',
    justifyContent: 'center',
  },
  innerContainer: {
    height: '75%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 35,
    fontFamily: 'Comfortaa_700Bold',
  },
  image: { borderRadius: 10, height: 75, width: 75 },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Comfortaa_400Regular',
  },
});
