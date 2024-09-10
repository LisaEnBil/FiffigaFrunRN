import { StyleSheet } from 'react-native';
import { app } from '../../helpers/translations';
import { PrimaryButton } from './PrimaryButton';
import { useNavigation } from 'expo-router';

export const BackButton = () => {
  const navigation = useNavigation();

  const handleNavigateBack = () =>
    navigation.goBack();
  ;

  return (
    <PrimaryButton
      onPressFunction={handleNavigateBack}
      buttonStyle={backButtonStyles.pressableContainer}
      text={app.buttons.back}
      icon={'chevron-back-outline'}
    />
  );
};

export const backButtonStyles = StyleSheet.create({
  pressableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  text: { fontFamily: 'Comfortaa_400Regular', color: 'white' },
});
