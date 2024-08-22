import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('screen').width;
const cardWidth = (90 / 100) * width;
const textWidth = (80 / 100) * cardWidth;

export const listItemStyles = StyleSheet.create({
  container: {
    backgroundColor: '#2d4e53',
    borderRadius: 5,
    height: 105,
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  likeContainer: {
    alignItems: 'flex-end',
  },
  textContainer: {
    alignItems: 'center',
    marginHorizontal: '5%',
    justifyContent: 'flex-start',
  },
  title: {
    paddingTop: 2,
    color: '#FFFCF5',
    fontSize: 18,
    fontFamily: 'Comfortaa_400Regular',
  },
});
