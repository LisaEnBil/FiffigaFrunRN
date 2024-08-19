import { useState } from 'react';
import { Animated, Dimensions, Pressable, View } from 'react-native';
import { goodTohaveStyles } from './styles/get-good-to-have.styles';
import { itemsArr } from '../app/Screens/Home/GoodToHaveList/itemsArray';
import { Item } from '@/types/global-types';
import { AnimatedArrow } from './AnimatedArrow';

const width = Dimensions.get('screen').width;
const listItemWidth = (90 / 100) * width;

type ListItem = {
  id: number,
  title: string,
  description: string,
};

export const GetGoodToHaveList = () => {
  const [itemClicked, setItemClicked] = useState<number | null>(null);
  const [isRotated, setIsRotated] = useState(false);

  const handlePress = (item: ListItem) => {
    if (itemClicked === item.id) {
      setItemClicked(null);
    } else {
      setItemClicked(item.id);
    }
  };
  const handleIsRotated = (bool: boolean) => {
    setIsRotated(bool);
  };

  return (
    <View style={goodTohaveStyles.wrapper} >
      <AnimatedArrow
        handleIsRotated={handleIsRotated}
        isRotated={isRotated}
      />
      {
        itemsArr.map((item) => {
          return (
            <View key={item.id} style={{ width: listItemWidth }
            }>
              {
                isRotated ? (
                  <View>
                    <Pressable
                      onPress={() => handlePress(item)}
                      style={goodTohaveStyles.pressable} >
                      <Animated.View
                        style={
                          [
                            goodTohaveStyles.component,
                            itemClicked === item.id && goodTohaveStyles.clicked,
                          ]
                        }
                      />
                      < Animated.Text
                        style={
                          [
                            goodTohaveStyles.text,
                            goodTohaveStyles.title,
                            itemClicked === item.id &&
                            goodTohaveStyles.titleClicked]} >
                        {item.title}
                      </Animated.Text>
                    </Pressable>
                    {
                      itemClicked === item.id && (
                        <Animated.Text
                          style={
                            [
                              goodTohaveStyles.description,
                              itemClicked === item.id &&
                              goodTohaveStyles.descriptionClicked,
                            ]
                          }>
                          {item.description}
                        </Animated.Text>
                      )
                    }
                  </View>
                ) : null}
            </View>
          );
        })}
    </View>
  );
}