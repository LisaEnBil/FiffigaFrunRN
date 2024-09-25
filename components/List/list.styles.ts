import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('screen').width;

export const listStyles = StyleSheet.create({
  sectionHeader: {
    minHeight: 30,
    backgroundColor: '#97B1A6',
    paddingTop: '2%',
    marginBottom: 5,
    elevation: 0,
  },
  sectionHeaderText: {
    color: '#2d4e53',
    fontWeight: 'bold',
    fontSize: 18,
  },
  contentContainer: {
    width: windowWidth,
    paddingHorizontal: '5%',
  },
});
