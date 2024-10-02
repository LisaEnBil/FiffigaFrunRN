import { Dimensions, StyleSheet } from 'react-native';


const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
const marginHorizontal = (5 / 100) * windowWidth;
const likesContainerPaddingTop = (2.5 / 100) * windowWidth;
const likesContainerWidth = (95 / 100) * windowWidth;


export const itemContentStyles = StyleSheet.create({
  container: {
    backgroundColor: '#2d4e53',
    marginHorizontal: marginHorizontal,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    position: 'relative',

  },
  content: {
    marginHorizontal: marginHorizontal,
    position: 'relative',
    zIndex: 2,
  },
  title: {
    marginBottom: 10,
    color: '#FFFCF5',
    fontSize: 24,
    fontFamily: 'Comfortaa_400Regular',
  },
  text: {
    fontSize: 16,
    color: '#FFFCF5',
    fontFamily: 'Comfortaa_400Regular',
    lineHeight: 26,
    marginBottom: 10,
  },
  likeContainer: {
    paddingRight: marginHorizontal,
    paddingTop: likesContainerPaddingTop,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: likesContainerWidth,
  },
  blurContainer: {
    position: 'absolute',
    top: 150,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 5, // Match the container's borderRadius
    overflow: 'hidden',
    zIndex: 1,
  },
});
