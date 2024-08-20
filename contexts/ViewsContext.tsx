import { loadViews, reducer } from '@/components/Providers/ViewsProvider';
import { createContext, ReactNode, useEffect, useReducer } from 'react';


interface ViewsState {
    views: Record<string, number>;
    dispatch: React.Dispatch<any>;
}

interface ViewsProviderProps {
    children: ReactNode;
}



export const ViewsContext = createContext<ViewsState | null>({ views: {}, dispatch: () => null });




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
