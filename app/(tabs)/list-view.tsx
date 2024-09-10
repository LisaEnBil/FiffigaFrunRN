import { useEffect, useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { HeaderButton } from '../../components/Buttons/HeaderButton';
import { List } from '../../components/List/List';
import { FilterModal } from '../../components/Modal/FilterModal';
import { app, tips } from '../../helpers/translations';
import { CategoryItem, Item, LikedItem } from '@/types/global-types';
import { listViewStyles } from './styles/list-view.styles';
import { useNavigation, useRouter } from 'expo-router';

const width = Dimensions.get('screen').width;



export default function ListView() {
  const [data, setData] = useState<Item[]>([]);
  const [initialData, setInitialData] = useState<Item[]>([]);
  const [categoryList, setCategoryList] = useState<CategoryItem[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getData = async () => {
      const data: Item[] = Object.values(tips);
      data.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });

      setData(data);
      setInitialData(data);
    };
    getData();
  }, []);

  const categories: Record<string, CategoryItem> = app.categories;

  useEffect(() => {
    if (!categoryList.length) {
      Object.keys(categories).map((category) => {
        categoryList.push({
          category: category,
          checked: false,
        });
      });
    }
  }, [data]);

  const handleToggleFilterModal = (bool: boolean) => {
    setShowModal(bool);
  };

  const handleSetData = (newData: LikedItem[], categories: CategoryItem[]) => {
    setData(newData);
    setCategoryList(categories);
  };

  const handleUserInput = (input: string) => {
    setQuery(input);
  };
  return (
    <SafeAreaView style={{
      flex: 1, backgroundColor: '#97B1A6',
      alignItems: 'center',
    }}>
      <View style={{ width: width, alignItems: "flex-end" }}>
        <HeaderButton handleToggleFilterModal={handleToggleFilterModal} toggleFilterModal={showModal} />
      </View>
      <View style={listViewStyles.container}>
        <List data={data} />
        {showModal && (
          <View style={listViewStyles.modalWrapper}>
            <FilterModal
              initialData={initialData}
              handleSetData={handleSetData}
              handleCloseModal={handleToggleFilterModal}
              categoryList={categoryList}
              handleUserInput={handleUserInput}
              query={query}
            />
            <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
              <View style={listViewStyles.modalWrapperFooter} />
            </TouchableWithoutFeedback>
          </View>
        )}
      </View>
    </SafeAreaView>

  );
};
