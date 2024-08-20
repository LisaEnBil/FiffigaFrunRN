import { reducer } from '@/components/Providers/LikesProvider';
import { LikedItem } from '@/types/global-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useReducer, ReactNode } from 'react';

interface LikesState {
    likes: Record<string, LikedItem>;
    dispatch: React.Dispatch<any>;
}

export const LikesContext = createContext<LikesState | null>({ likes: {}, dispatch: () => null });

interface LikesProviderProps {
    children: ReactNode; // Correctly typing the children prop
}

export const LikesProvider: React.FC<LikesProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { likes: {} });

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