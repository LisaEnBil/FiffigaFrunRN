import { StyleSheet, Text, View } from 'react-native';

export const TextBox: React.FC<{ text: string }> = ({ text }) => {
  return (
    <View style={textBoxStyles.container}>
      <Text style={textBoxStyles.text}>{text}</Text>
    </View>
  );
};

export const textBoxStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: '5%',
    marginTop: '5%',
    marginBottom: '15%',
    borderRadius: 5,
    backgroundColor: '#698996',
    padding: '5%',
  },
  text: {
    color: 'white',
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 14,
    lineHeight: 20,
    borderRadius: 5,
    backgroundColor: '#698996',
    padding: '5%',
  },
});
