import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('screen').width;
const cardWidth = (90 / 100) * width;
const paddingHorizontal = (width - cardWidth) / 2;
const borderdWidth = (80 / 100) * width;


export const carouselStyles = StyleSheet.create({
  wrapper: {
    paddingBottom: 10,
    paddingTop: 20,
    backgroundColor: '#2d4e53',
    borderTopColor: '#97B1A6',
    borderTopWidth: 0.5,
    borderTopStartRadius: borderdWidth,
    borderTopEndRadius: borderdWidth,
    borderBottomStartRadius: borderdWidth,
    borderBottomEndRadius: borderdWidth,
    borderBottomWidth: 0.5,
    borderBottomColor: '#97B1A6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
    paddingLeft: paddingHorizontal,
  },
  headerText: {
    fontFamily: 'Comfortaa_400Regular',
    color: '#ffffff',
    fontSize: 18,
    paddingLeft: 10,
  },
  animatedView: {
    overflow: 'visible',
  },
  contentContainer: {
    paddingHorizontal: paddingHorizontal,
    marginBottom: 10,
  },
});
