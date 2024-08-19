import { SafeAreaView } from 'react-native';
import { PrimaryButton } from './PrimaryButton';
import React from 'react';

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
    <SafeAreaView>
      <PrimaryButton
        onPressFunction={handleModal}
        buttonStyle={{
          height: 45,
          width: 45,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: '10%',
        }}
        icon={'search'}
        iconSize={20}
      />
    </SafeAreaView>
  );
};
