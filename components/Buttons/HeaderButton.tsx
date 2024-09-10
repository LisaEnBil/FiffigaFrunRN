import { Dimensions, SafeAreaView } from 'react-native';
import { PrimaryButton } from './PrimaryButton';
import React from 'react';

const width = Dimensions.get('screen').width;
const cardWidth = (2.5 / 100) * width;

interface HeaderButtonProps {
  handleToggleFilterModal: (value: boolean) => void;
  toggleFilterModal: boolean;
}

export const HeaderButton: React.FC<HeaderButtonProps> = ({
  handleToggleFilterModal,
  toggleFilterModal,
}) => {
  const handleModal = () => {
    if (toggleFilterModal === false) {
      handleToggleFilterModal(true);
    }
    if (toggleFilterModal === true) {
      handleToggleFilterModal(false);
    }
  };
  return (
    <PrimaryButton
      onPressFunction={handleModal}
      buttonStyle={{
        height: 45,
        width: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: cardWidth,
      }}
      icon={'search'}
      iconSize={20}
    />

  );
};
