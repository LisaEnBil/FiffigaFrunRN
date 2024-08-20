import { reducer } from "../UnsubscribedUserProvider";

jest.mock('@react-native-async-storage/async-storage', () => ({
  saveViews: jest.fn(),
}));


describe('Unsubscribed user reducer', () => {



  test('should handle initialize action', () => {
    const initialState = { views: 0 };


    const action = { type: 'initialize', payload: { views: 10 } };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ views: 10 });
  });

  test('should handle add one to view', () => {

    const initialState = { views: 0 };

    const action = { type: 'add', payload: { views: 0 } };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ views: 1 });
  });

  test('should handle remove one from view', () => {

    const initialState = { views: 5 };

    const action = { type: 'remove', payload: { views: 5 } };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ views: 4 });
  });
});
