import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { SearchBar } from '@/components/Modal/SearchBar';

describe('SearchBar component', () => {
  test('updates userInput and modifiedData state when typing in TextInput', () => {
    const initialData = [{ title: 'Item 1' }, { title: 'Item 2' }];
    const handleUserInput = jest.fn();
    const handleSetData = jest.fn();
    const handleClose = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar
        initialData={ initialData }
        handleUserInput = { handleUserInput }
        handleSetData = { handleSetData }
        handleClose = { handleClose }
      />
    );
    const input = getByPlaceholderText('Sök');

    fireEvent.changeText(input, 'Item');
    expect(input.props.value).toBe('Item');
    expect(handleClose).not.toHaveBeenCalled();
  });

  test('does not update state or call any functions when typing in TextInput with no matches found', () => {
    const initialData = [{ title: 'Item 1' }, { title: 'Item 2' }];
    const handleUserInput = jest.fn();
    const handleSetData = jest.fn();
    const handleClose = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar
        initialData={ initialData }
        handleUserInput = { handleUserInput }
        handleSetData = { handleSetData }
        handleClose = { handleClose }
      />
    );
    const input = getByPlaceholderText('Sök');

    fireEvent.changeText(input, 'Non-existing item');

    expect(input.props.value).toBe('Non-existing item');
    expect(handleUserInput).not.toHaveBeenCalled();
    expect(handleSetData).not.toHaveBeenCalled();
    expect(handleClose).not.toHaveBeenCalled();
  });

  test('resets userInput and modifiedData state when typing in TextInput and then clearing all text', () => {
    const initialData = [{ title: 'Item 1' }, { title: 'Item 2' }];
    const handleUserInput = jest.fn();
    const handleSetData = jest.fn();
    const handleClose = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar
        initialData={ initialData }
        handleUserInput = { handleUserInput }
        handleSetData = { handleSetData }
        handleClose = { handleClose }
      />
    );
    const input = getByPlaceholderText('Sök');

    fireEvent.changeText(input, 'Item');
    fireEvent.changeText(input, '');

    expect(input.props.value).toBe('');
    expect(handleUserInput).not.toHaveBeenCalledWith('');
    expect(handleSetData).not.toHaveBeenCalledWith(initialData, []);
    expect(handleClose).not.toHaveBeenCalled();
  });
});
