import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const PrimaryButton = ({
  onPressFunction,
  buttonStyle,
  textStyle,
  text,
  icon,
  iconColor,
  iconSize,
}: {
  onPressFunction: any,
  buttonStyle: any,
  textStyle: any,
  text: string,
  icon: any,
  iconColor: string,
  iconSize: number,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={buttonStyle ? buttonStyle : buttonStyles.pressable}
      onPress={onPressFunction}>
      {icon && (
        <Ionicons
          name={icon}
          size={iconSize ? iconSize : 24}
          color={iconColor ? iconColor : 'white'}
        />
      )}
      {text && (
        <Text style={textStyle ? textStyle : buttonStyles.buttonText}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export const buttonStyles = StyleSheet.create({
  pressable: {
    backgroundColor: '#2d4e53',
    padding: '1%',
    borderRadius: 3,
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 8,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Comfortaa_300Light',
    padding: '2%',
  },
});
