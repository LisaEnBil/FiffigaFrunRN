import { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import RevenueCatUI, { PAYWALL_RESULT } from 'react-native-purchases-ui';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Svg, { G, Path } from 'react-native-svg';
import { List } from '../../components/List/List';
import { TextBox } from '../../components/TextBox';
import { app } from '../../helpers/translations';
import { useGetLikedItems } from '../../hooks/useGetLikedItems';
import { likedItemsStyles } from './styles/liked-items.styles';
import { emailStyles } from './styles/email.styles';


export default function LikedItems() {
  const data = useGetLikedItems();
  // const [userIsSubscribed, setUserIsSubscribed] = useState(true);

  // const isSubscribed = async () => {
  //   const paywallResult = await RevenueCatUI.presentPaywallIfNeeded({
  //     requiredEntitlementIdentifier: 'pro',
  //   });

  //   switch (paywallResult) {
  //     case PAYWALL_RESULT.NOT_PRESENTED:
  //       return true;
  //     case PAYWALL_RESULT.ERROR:
  //     case PAYWALL_RESULT.CANCELLED:
  //       return false;
  //     case PAYWALL_RESULT.PURCHASED:
  //     case PAYWALL_RESULT.RESTORED:
  //       return true;
  //     default:
  //       return false;
  //   }
  // };

  // useEffect(() => {
  //   const proAction = async () => {
  //     if (await isSubscribed()) {
  //       Alert.alert('User has acces');
  //       setUserIsSubscribed(true);
  //     }
  //   };

  //   proAction();
  // }, []);

  return (
    <SafeAreaView style={emailStyles.safeAreaStyle}>
      <View style={likedItemsStyles.list}>
        {data.length != 0 ? (
          <List data={data} />
        ) : (
          <View style={{ width: '90%' }}>
            <TextBox text={app.favourites.emptyList} />
            <SvgComponent />
          </View>
        )}
      </View>
      {/* {userIsSubscribed ? (
        <View style={likedItemsStyles.list}>
          {data.length != 0 ? (
            <List data={data} />
          ) : (
            <View style={{ width: '90%' }}>
              <TextBox text={app.favourites.emptyList} />
              <SvgComponent />
            </View>
          )}
        </View>
      ) : (
        <View style={likedItemsStyles.list}>
          <TextBox text={app.favourites.noSubscription} />
        </View>
      )} */}
    </SafeAreaView>
  );
};

function SvgComponent(props: any) {
  return (
    <Svg
      width="350"
      height="550"
      opacity="0.4"
      viewBox="0 0 70 210"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G display="inline">
        <Path
          d="M163.31 150.88c-.068-3.492-.245-28.796.052-35.093.12-2.552 2.424-5.153 4.938-5.308 1.166-.073 18.285-.111 19.317-.109 2.412.005 5.485 1.576 5.402 5.602l.013 35.013c.084 2.828-2.393 5.28-5.06 5.264-5.048-.03-15.783-.086-19.098-.055-4.042-.284-5.284-1.8-5.565-5.313zm5.101-2.033c.253 2.377 3.03 3.667 2.582 1.074.07-2.137-.08-32.41-.023-32.922.331-2.972-2.743-1.04-2.668.717-.202 3.544.091 29.752.094 30.898zm17.615 1.146c-.344 2.596 2.38.966 2.412-1.157.046-2.316.374-29.227.283-31.126.018-1.945-3.035-3.972-2.556-.705zm-15.05-47.423c.128-.267.014-1.237 2.132-1.23 1.378.003 7.984-.092 9.739-.113 2.105-.025 2.765 1.274 2.777 1.875l-.108 6.56c-1.207 0-13.28.032-14.406.041zm12.235 1.193c.43-1.51-3.406-1.142-1.89-.4.882.43.203 4.776.638 5.299.081.098 1.016.066 1.33.066.01-1.196.031-3.716-.078-4.965zm-23.421-2.592c.813-1.35 1.982-3.114 2.75-5.131 4.712-7.288 5.158-13.648 6.876-17.029.173-.02.443-.138 2.812-.134 5.417.284 13.077 1.702 16.32 4.394.347.287 2.447 2.059 2.46 5.255.886 10.598-15.245-12.473-29.284 14.222-.452.86-2.443.211-1.934-1.577zm10.75-20.94a8.72 8.72 0 00-.217 1.39c11.017-.891 17.718 3.752 19.13 5.173-.978-5.24-16.113-7.61-18.913-6.562zm3.162 20.623c-.204-.81-.178-5.009.165-5.836.975-1.384 7.2-1.494 8.527-.09.738.249.517 5.302.548 5.779zm7.864-1.064c.017-1.008-.026-3.986-.561-4.43-.855-.709-1.582.112-.783.676.364.195.39 2.268.378 3.673zm-6.78-9.636c1.049-.823 6.347-.687 6.955-.058.039.638-.034 2.696-.037 3.737-2.006-.712-5.557-.448-7.011.084-.063-1.347.053-3.12.093-3.763zm5.148 1.172c-.007-.246-.624-1.2-.926-.338.044.186.204 1.502.212 1.698.21.187.467.117.75-.003zm-20.011-6.18c-.011-.67.103-1.56.225-2.741.153-.764.115-1.502.533-2.154 3.016-.273 6.967.011 7.611.123.014.468-1.604 5.624-1.848 5.858-4.394-.207-6.081-.377-6.13-.377-.41-.107-.425-.323-.391-.708z"
          transform="matrix(2 0 0 2 -319.415 -157.753)"
          fill="#2d4e53"
        />
      </G>
    </Svg>
  );
}
