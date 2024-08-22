import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import {
  Keyboard,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { app } from '../../helpers/translations';
import { CategoryIcons } from './CategoryIcons';
import { ModalFooter } from './ModalFooter';
import { SearchBar } from './SearchBar';
import { modalStyles } from './filter-modal.styles';
import { CategoryItem, Item, LikedItem, } from '@/types/global-types';

interface FilterModalProps {
  initialData: any
  handleSetData: any
  handleCloseModal: any
  categoryList: CategoryItem[]
  query: string
  handleUserInput: any
}

export const FilterModal: React.FC<FilterModalProps> = ({
  initialData,
  handleSetData,
  handleCloseModal,
  categoryList,
  query,
  handleUserInput,
}) => {
  const [modifiedData, setModifiedData] = useState<any[]>([]);
  const [modifiedCategoryList, setModifiedCategoryList] =
    useState(categoryList);

  const c = app.categories;

  const handleReset = () => {
    modifiedCategoryList.filter(
      (categoryItem) => (categoryItem.checked = false)
    );

    handleSetData(initialData, modifiedCategoryList);
  };

  const handleSetCheckboxValue = (categoryItem: CategoryItem, index: number) => {
    const modifiedList = Object.assign([], modifiedCategoryList, {
      [index]: {
        category: categoryItem.category,
        checked: !categoryItem.checked,
      },
    });

    setModifiedCategoryList(modifiedList);
  };

  const handleSubmit = () => {
    initialData.map((item: LikedItem) => {
      modifiedCategoryList.map((category) => {
        const foundItem = modifiedData.find(
          (element: Item) => item.title === element.title
        );
        if (
          item.categories.includes(category.category) &&
          category.checked &&
          !foundItem
        ) {
          modifiedData.push(item);
        }
      });
    });

    if (modifiedData.length) {
      handleSetData(modifiedData, modifiedCategoryList);
      handleClose();
    } else {
      handleSetData(initialData, categoryList);
    }
  };

  const handleClose = () => {
    handleCloseModal(false);
  };

  const handleClickOutside = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback
      style={{ margin: 10 }}
      onPress={handleClickOutside}>
      <View style={modalStyles.container}>
        <View style={{ alignItems: 'center' }}>
          <SearchBar
            initialData={initialData}
            handleSetData={handleSetData}
            query={query}
            handleUserInput={handleUserInput}
            handleClose={handleClose}
            categoryList={categoryList}
          />
        </View>
        <View style={modalStyles.list}>
          {modifiedCategoryList.map((category, index) => {
            const capitalized =
              c[category.category].charAt(0).toUpperCase() +
              c[category.category].slice(1);

            return (
              <Pressable
                key={index}
                style={[
                  modalStyles.listItemContainer,
                  category.checked && modalStyles.categoryClicked,
                ]}
                onPress={() => handleSetCheckboxValue(category, index)}>
                <View
                  style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <CategoryIcons
                    category={category.category}
                    color={category.checked ? '#97B1A6' : '#ffffff'}
                    size={22}
                  />
                  <Text style={modalStyles.categoryTitle}>
                    {capitalized}
                  </Text>
                </View>
                <Checkbox
                  value={category.checked}
                  onValueChange={() =>
                    handleSetCheckboxValue(category, index)
                  }
                  color={'#97B1A6'}
                />
              </Pressable>
            );
          })}
        </View>
        <ModalFooter
          handleClose={handleClose}
          handleReset={handleReset}
          handleSubmit={handleSubmit}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
