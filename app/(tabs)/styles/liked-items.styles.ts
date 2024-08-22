import { StyleSheet } from 'react-native';

export const likedItemsStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    backgroundColor: '#97B1A6',
    alignItems: 'center',
    flex: 9,
  },
  textWrapper: {
    backgroundColor: '#698996',
    marginTop: '5%',
    marginBottom: '20%',
    padding: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontFamily: 'Comfortaa_400Regular',
    color: '#ffffff',
    fontSize: 14,
    lineHeight: 20,
  },
});
