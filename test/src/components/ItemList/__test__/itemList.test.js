import React from 'react';
import { ItemList } from '../ItemList';
import { mockStore, wrapProvider } from '../../../utils/mockedStore';
import { render } from '@testing-library/react';

jest.mock('../../../store/actionCreators', () => ({
	setList: () => [],
}));
describe('ItemList"s tests', () => {
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

	it('ItemList"s', () => {
		const store = mockStore(initialState);

		render(wrapProvider(<ItemList></ItemList>, store));

		expect(store.getActions()).toEqual([]);
	});
});
