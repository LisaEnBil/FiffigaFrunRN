import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const listViewStyles = StyleSheet.create({
  container: {
    backgroundColor: '#97B1A6',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    width: windowWidth,
  },
  text: {
    fontSize: 10,
    color: '#ffffff',
  },
  iconWrapper: {
    flex: 0.3,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '85%',
  },
  icon: {
    margin: 5,
  },
  modalWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  modalWrapperFooter: {
    backgroundColor: '#000000',
    opacity: 0.3,
    width: '100%',
    height: '100%',
  },
});
