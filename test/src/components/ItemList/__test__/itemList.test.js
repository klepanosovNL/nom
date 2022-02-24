import React from 'react';
import { ItemList } from '../ItemList';
import { mockStore, wrapProvider } from '../../../utils/mockedStore';
import { render, waitFor } from '@testing-library/react';

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

	it('ItemList"s', async () => {
		const store = mockStore(initialState);

		render(wrapProvider(<ItemList></ItemList>, store));

		await waitFor(() => {
			expect(store.getActions()).toEqual([]);
		});
	});
});
