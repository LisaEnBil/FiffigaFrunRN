import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadViews } from '@/components/Providers/ViewsProvider';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));


const dispatch = jest.fn();

const mockedAsyncStorage = AsyncStorage as jest.Mocked<typeof AsyncStorage>;

describe('UnsubscribedUserProvider - loadViews', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedAsyncStorage.getItem.mockReset();
  });

  test('should initialize views and lastOpened if lastOpened is null', async () => {
    mockedAsyncStorage.getItem
      .mockResolvedValueOnce(null)
      .mockResolvedValueOnce(null);

    await loadViews(dispatch);

    expect(mockedAsyncStorage.setItem).toHaveBeenCalledWith('views', '0');
    expect(mockedAsyncStorage.setItem).toHaveBeenCalledWith('lastOpened', expect.any(String));
    expect(dispatch).toHaveBeenCalledWith({
      type: 'initialize',
      payload: { views: 0 },
    });
  });

  test('should set views to 0 if lastOpened is from a different month', async () => {
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);

    mockedAsyncStorage.getItem
      .mockImplementation((key) => {
        if (key === 'views') return Promise.resolve('5');
        if (key === 'lastOpened') return Promise.resolve(JSON.stringify(lastMonth));
        return Promise.resolve(null);
      });

    await loadViews(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'initialize',
      payload: { views: 0 },
    });

    expect(mockedAsyncStorage.setItem).toHaveBeenCalledWith('views', '0');
    expect(mockedAsyncStorage.setItem).toHaveBeenCalledWith('lastOpened', expect.any(String));
  });

  test('should load existing views if lastOpened is from the same month', async () => {
    const thisMonth = new Date();

    mockedAsyncStorage.getItem
      .mockImplementation((key) => {
        if (key === 'views') return Promise.resolve('5');
        if (key === 'lastOpened') return Promise.resolve(JSON.stringify(thisMonth));
        return Promise.resolve(null);
      });

    await loadViews(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'initialize',
      payload: { views: 5 },
    });

    expect(mockedAsyncStorage.setItem).not.toHaveBeenCalled();
  });

});




