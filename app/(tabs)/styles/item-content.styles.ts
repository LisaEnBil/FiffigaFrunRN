import { StyleSheet } from 'react-native';

export const itemContentStyles = StyleSheet.create({
  container: {
    backgroundColor: '#2d4e53',
    marginHorizontal: '5%',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: '5%',
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  content: {
    marginHorizontal: '5%',
  },
  title: {
    paddingTop: 5,
    marginBottom: '5%',
    color: '#FFFCF5',
    fontSize: 24,
    fontFamily: 'Comfortaa_400Regular',
  },
  text: {
    fontSize: 16,
    color: '#FFFCF5',
    fontFamily: 'Comfortaa_400Regular',
    lineHeight: 26,
    marginBottom: '10%',
  },
  likeContainer: {
    paddingRight: '3%',
    paddingTop: '3%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
});
