import { ViewsContext } from '@/contexts/ViewsContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { ReactNode, useEffect, useReducer } from 'react';

interface ViewsProviderProps {
  children: ReactNode;
}

export const reducer = (state: any, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case 'initialize':
      return { ...state, views: payload.views };
    case 'add':
      const updatedViewsAdd = state.views + 1;
      saveViews(updatedViewsAdd);
      return { ...state, views: updatedViewsAdd };
    case 'remove':
      const updatedViewsRemove = state.views - 1;
      saveViews(updatedViewsRemove);
      return { ...state, views: updatedViewsRemove };
    default:
      return state;
  }
};

const saveViews = async (views: number) => {
  try {
    await AsyncStorage.setItem('views', JSON.stringify(views));
    await AsyncStorage.setItem('lastOpened', JSON.stringify(new Date()));
  } catch (error) {
    console.error('Failed to save views or date to AsyncStorage', error);
  }
};

export const loadViews = async (dispatch: React.Dispatch<any>) => {
  try {
    const lastOpenedJson = await AsyncStorage.getItem('lastOpened');
    const lastOpened = lastOpenedJson !== null ? new Date(JSON.parse(lastOpenedJson)) : null;
    const today = new Date();

    let views = 0;
    if (lastOpened === null ||
      lastOpened.getMonth() !== today.getMonth() ||
      lastOpened.getFullYear() !== today.getFullYear()) {
      // It's the first time opening the app or it's a new month
      await AsyncStorage.setItem('views', JSON.stringify(views));
      await AsyncStorage.setItem('lastOpened', JSON.stringify(today));
    } else {
      // It's not a new month, so we load the existing views
      const viewsJson = await AsyncStorage.getItem('views');
      views = viewsJson !== null ? parseInt(viewsJson, 10) : 0;
    }

    dispatch({
      type: 'initialize',
      payload: { views },
    });
  } catch (error) {
    console.error('Failed to load views or date from AsyncStorage', error);
  }
};


export const UnsubscribedUserProvider: React.FC<ViewsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { views: 0 });

  useEffect(() => {


    loadViews(dispatch);
  }, []);

  return (
    <ViewsContext.Provider value={{ views: state.views, dispatch }
    }>
      {children}
    </ViewsContext.Provider>
  );
};
