import { loadViews, reducer } from '@/components/Providers/ViewsProvider';
import { createContext, ReactNode, useEffect, useReducer } from 'react';


export interface ViewsState {
    views: number;
    dispatch: React.Dispatch<any>;
}


export const ViewsContext = createContext<ViewsState>({ views: 0, dispatch: () => null });

