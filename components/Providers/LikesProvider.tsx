import { LikedItem } from '@/types/global-types';
import React, { createContext, ReactNode, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface LikesProviderProps {
  children: ReactNode;
}

interface LikesState {
  likes: Record<string, LikedItem>;
  dispatch: React.Dispatch<any>;
}

const initialState: LikesState = {
  likes: {},
  dispatch: () => null, // No-op function
};

export const LikesContext = createContext<LikesState>(initialState);

export const reducer = (state: any, action: any) => {
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
  //const [state, dispatch] = useReducer(reducer, { likes: {} });

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("state", state)

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
  }, []);

  return (
    <LikesContext.Provider value={{ likes: state.likes, dispatch }}>
      {children}
    </LikesContext.Provider>
  );
};