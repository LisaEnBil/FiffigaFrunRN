import { View } from 'react-native';
import { app } from '../../helpers/translations';
import { PrimaryButton } from '../Buttons/PrimaryButton';
import { modalStyles } from './filter-modal.styles';

interface ModalFooterProps {
  handleReset: any
  handleClose: any
  handleSubmit: any
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  handleReset,
  handleClose,
  handleSubmit,
}) => {
  return (
    <View>
      <View style={modalStyles.buttonContainer}>
        <PrimaryButton
          onPressFunction={handleReset}
          text={app.buttons.reset}
        />
        <PrimaryButton
          onPressFunction={handleSubmit}
          text={app.buttons.apply}
        />
      </View>
      <View style={modalStyles.closeButton}>
        <PrimaryButton
          onPressFunction={handleClose}
          buttonStyle={modalStyles.button}
          text={app.buttons.close}
          icon={'chevron-up'}
        />
      </View>
    </View>
  );
};
