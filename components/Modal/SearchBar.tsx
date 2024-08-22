import { useState } from 'react';
import { NativeSyntheticEvent, TextInput, TextInputSubmitEditingEventData, View } from 'react-native';
import { app } from '../../helpers/translations';
import { PrimaryButton } from '../Buttons/PrimaryButton';
import { searchStyles } from './search-bar.styles';
import { CategoryItem, Item } from '@/types/global-types';


interface SearchBarProps {
  initialData: Item[],
  handleUserInput: (value: string) => void,
  handleSetData: (value: Item[], []) => void,
  query: string,
  handleClose: () => void,
  categoryList: CategoryItem[]
}

export const SearchBar: React.FC<SearchBarProps> = ({
  initialData,
  handleUserInput,
  handleSetData,
  query,
  handleClose,
  categoryList,
}) => {
  const [userInput, setUserInput] = useState(query);
  const [modifiedData, setModifiedData] = useState<Item[]>([]);

  const handleKeyPress = (e: any) => {
    const input = e.nativeEvent.text;

    if (input.length === '') {
      setUserInput('');
      setModifiedData([]);
      handleSetData(initialData, []);
      handleUserInput('');
    } else {
      initialData.map((item: Item) => {
        if (item.title.toLowerCase().includes(input.toLowerCase())) {
          modifiedData.push(item);
        }
      });
      if (modifiedData.length) {
        setUserInput(input);
        handleSetData(modifiedData, []);
        handleUserInput(input);
        handleClose();
      } else {
        setUserInput(input);
        handleSetData(initialData, categoryList);
        handleUserInput(input);
      }
    }
  };

  const handleOnPress = () => {
    setUserInput('');
    handleSetData(initialData, categoryList);
    handleUserInput('');
  };

  return (
    <View
      accessible={true}
      accessibilityLabel="Sök efter tips"
      accessibilityHint="Öppnar och stänger sökfältet"
      //allowFontScaling={true}
      style={searchStyles.container}>
      <TextInput
        testID="userInput"
        value={userInput}
        onChangeText={setUserInput}
        style={searchStyles.textInput}
        autoCorrect={false}
        placeholder={app.searchbar.search}
        onSubmitEditing={(e) => handleKeyPress(e)}
      />
      <PrimaryButton
        onPressFunction={handleOnPress}
        buttonStyle={{
          marginRight: '2%',
          justifyContent: 'center',
        }}
        icon={'close'}
        iconColor={'grey'}
      />
    </View>
  );
};
