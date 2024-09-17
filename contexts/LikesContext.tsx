import { reducer } from '@/components/Providers/LikesProvider';
import { LikedItem } from '@/types/global-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useReducer, ReactNode } from 'react';

interface LikesState {
    likes: Record<string, LikedItem>;
    dispatch: React.Dispatch<any>;
}

export const LikesContext = createContext<LikesState | null>({ likes: {}, dispatch: () => null });

