import React, { useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LikesContext } from '@/contexts/LikesContext';

interface LikesProviderProps {
  children: any;
}

interface State {
  likes: {}
};

interface ActionType {
  payload: Record<string, any>,
  type: string
}


const reducer = (state: State, action: ActionType) => {
  const { type, payload } = action;

  let likes = state.likes;

  switch (type) {
    case 'initialize':
      return { ...state, likes: payload.likes };
    case 'add':
      likes = { ...state.likes, [payload.itemTitle]: true };
      AsyncStorage.setItem('likes', JSON.stringify(likes));
      return { ...state, likes };
    case 'remove':
      likes = { ...state.likes, [payload.itemTitle]: false };
      AsyncStorage.setItem('likes', JSON.stringify(likes));
      return { ...state, likes };
    default:
      return state;
  }
};

export const LikesProvider: React.FC<LikesProviderProps> = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, {
    likes: {}
  });

  useEffect(() => {
    const loadLikes = async () => {
      const json = await AsyncStorage.getItem('likes');

      const likes = json === null ? {} : JSON.parse(json);

      dispatch({
        type: 'initialize',
        payload: {
          likes: likes,
        },
      });
    };

    loadLikes();
  }, [dispatch]);

  return (
    <LikesContext.Provider value={{ likes: state.likes, dispatch }}>
      {children}
    </LikesContext.Provider>
  );
};
