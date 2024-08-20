import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadViews } from '../UnsubscribedUserProvider';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

const dispatch = jest.fn();

describe('UnsubscribedUserProvider - loadViews', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should initialize views and lastOpened if lastOpened is null', async () => {
    AsyncStorage.getItem.mockResolvedValueOnce(null);

    await loadViews(dispatch);

    expect(AsyncStorage.setItem).toHaveBeenCalledWith('views', '0');
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('lastOpened', expect.any(String));
    expect(dispatch).toHaveBeenCalledWith({
      type: 'initialize',
      payload: { views: 0 },
    });
  });

  test('should load views if lastOpened is from the same month', async () => {
    const thisMonth = new Date();
    AsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify(thisMonth));

    await loadViews(dispatch);

    expect(AsyncStorage.setItem).not.toHaveBeenCalledWith('views', '0');
    expect(dispatch).not.toHaveBeenCalledWith({
      type: 'initialize',
      payload: { views: 5 },
    });
  });
});






// test('should load views if lastOpened is from the same month', async () => {
//   const thisMonth = Date.now();
//   AsyncStorage.getItem
//     .mockResolvedValueOnce(JSON.stringify(thisMonth))
//     .mockResolvedValueOnce('5');

//   await loadViews(dispatch);

//   expect(AsyncStorage.setItem).not.toHaveBeenCalledWith('views', '0');
//   expect(dispatch).toHaveBeenCalledWith({
//     type: 'initialize',
//     payload: { views: 5 },
//   });
// });