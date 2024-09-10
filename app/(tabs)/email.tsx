import * as MailComposer from 'expo-mail-composer';
import { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { PrimaryButton } from '../../components/Buttons/PrimaryButton';
import { TextBox } from '../../components/TextBox';
import { app } from '../../helpers/translations';
import { emailStyles } from './styles/email.styles';

export default function Email() {
  const [isAvailable, setIsAvailable] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const checkAvailability = async () => {
      const isMailAvailable = await MailComposer.isAvailableAsync();
      setIsAvailable(isMailAvailable);
    };

    checkAvailability();
  }, []);

  const sendIfAvailable = async () => {
    if (isAvailable) {
      await sendMail();
    }
  };

  const sendMail = async () => {
    const response = await MailComposer.composeAsync({
      subject: '',
      body: '',
      recipients: ['tips@swedlabs.se'],
    });

    return response;
  };

  return (
    <SafeAreaView style={emailStyles.safeAreaStyle}>
      <View>
        <TextBox text={app.email.text} />
        <View style={emailStyles.buttonWrapper}>
          <PrimaryButton
            onPressFunction={sendIfAvailable}
            text={app.buttons.sendEmail}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
