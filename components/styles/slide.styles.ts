import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('screen').width;
const cardWidth = (90 / 100) * width;

const maxWidth = cardWidth - 44 - 40;
const maxHeight = 200 - 40 - 21;
// 200 - 40 - 21
export const slideStyles = StyleSheet.create({
  container: {
    width: cardWidth,
    height: 200,
    backgroundColor: '#d3deda',
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#2d4e53',
    fontSize: 16,
    paddingTop: 2,
    fontFamily: 'Comfortaa_400Regular',
    maxWidth: maxWidth,
  },
  description: {
    color: '#2d4e53',
    fontSize: 14,
    fontFamily: 'Comfortaa_400Regular',
    maxHeight: maxHeight,
  },
});
