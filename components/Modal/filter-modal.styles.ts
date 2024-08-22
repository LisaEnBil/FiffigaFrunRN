import { StyleSheet } from 'react-native';

export const modalStyles = StyleSheet.create({
  container: {
    backgroundColor: '#97B1A6',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  list: {
    backgroundColor: '#97B1A6',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  listItemContainer: {
    height: 45,
    padding: 5,
    minWidth: '50%',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#97B1A6',
    backgroundColor: '#698996',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryTitle: {
    color: '#ffffff',
    fontFamily: 'Comfortaa_300Light',
    fontSize: 14,
    marginLeft: 5,
  },
  categoryClicked: {
    backgroundColor: '#2d4e53',
  },
  buttonContainer: {
    paddingTop: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
  },
  buttonText: {
    paddingTop: 5,
    fontFamily: 'Comfortaa_300Light',
    color: '#ffffff',
  },
  resetButtonText: {
    paddingTop: 5,
    fontFamily: 'Comfortaa_300Light',
    color: '#000000',
  },
  button: { alignItems: 'center' },
  closeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
});
