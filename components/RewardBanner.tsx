import { ViewsContext, ViewsState } from '@/contexts/ViewsContext';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Button } from 'react-native';
import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-5824395130914193/6221298268/5224354917';

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
    keywords: ['fashion', 'clothing'],
});

function RewardBanner() {
    const [loaded, setLoaded] = useState(false);
    const { views, dispatch } = useContext<ViewsState>(ViewsContext);

    useEffect(() => {
        const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
            setLoaded(true);
        });
        const unsubscribeEarned = rewarded.addAdEventListener(
            RewardedAdEventType.EARNED_REWARD,
            reward => {
                console.log('User earned reward of ', reward);
            },
        );

        // Start loading the rewarded ad straight away
        rewarded.load();

        // Unsubscribe from events on unmount
        return () => {
            unsubscribeLoaded();
            unsubscribeEarned();
        };
    }, []);


    // No advert ready to show yet
    if (!loaded) {
        return null;
    }

    return (
        <Button
            title="Show Rewarded Ad"
            onPress={() => {
                rewarded.show();
            }}
        />
    );
}

export default RewardBanner