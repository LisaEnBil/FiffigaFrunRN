import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('screen').width;
const marginClicked = (4 / 100) * width;
const marginNotClicked = (5 / 100) * width;
const textMargin = marginClicked * 2 + 16;

export const goodTohaveStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#2d4e53',
    justifyContent: 'center',
    paddingVertical: 25,
  },
  pressable: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  component: {
    borderRadius: 50,
    backgroundColor: '#ffffff',
    height: 10,
    width: 10,
    margin: marginNotClicked,
  },
  clicked: {
    backgroundColor: '#e39d9c',
    height: 16,
    width: 16,
    margin: marginClicked,
  },
  text: { color: '#ffffff', fontFamily: 'Comfortaa_400Regular' },
  title: {
    fontSize: 14,
    paddingTop: 2,
  },
  titleClicked: {
    fontSize: 16,
    color: '#e39d9c',
  },
  description: {
    fontSize: 12,
    color: '#ffffff',
    marginLeft: textMargin,
    marginBottom: 10,
  },
  descriptionClicked: {
    fontSize: 14,
    color: '#e39d9c',
  },
});
