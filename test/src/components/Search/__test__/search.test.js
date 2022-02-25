import React from 'react';
import renderer from 'react-test-renderer';
import { Search } from '../Search';
import { mockStore, wrapProvider } from '../../../utils/mockedStore';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Search"s tests', () => {
	jest.mock('../../../store/actionCreators', () => ({
		setFilterByName: (args) => ({ type: 'TEST_TYPE', args }),
	}));

	const initialState = {
		list: [
			{
				name: 'dog',
				description: 'description',
			},
		],
		currentPreset: 'none',
		filterByCategories: '',
		filterByNameInput: '',
		blockedButton: '',
		customs: [],
	};

	const store = mockStore(initialState);

	it('Search"s snapshot', () => {
		const tree = renderer
			.create(wrapProvider(<Search></Search>, store))
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Check event: handleInputChange(name)', () => {
		render(wrapProvider(<Search></Search>, store));

		const label = screen.getByPlaceholderText('Filter by name');
		fireEvent.click(label);

		expect(store.getActions()).toEqual([]);
	});
});
