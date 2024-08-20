import { LikedItem } from '@/types/global-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useReducer } from 'react';

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