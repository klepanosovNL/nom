import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Item } from '../Item';
import { mockStore, wrapProvider } from '../../../utils/mockedStore';

jest.mock('../../../store/actionCreators', () => ({
	checkBoxToggle: (...args) => ({ type: 'TEST_TYPE', args }),
}));

describe('Item"s tests', () => {
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

	it('Sent only name', () => {
		const tree = renderer
			.create(wrapProvider(<Item name='name1'></Item>, store))
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Sent only description', () => {
		const tree = renderer
			.create(wrapProvider(<Item description='description'></Item>, store))
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Sent only isDisabled=true', () => {
		const tree = renderer
			.create(wrapProvider(<Item isDisabled='true'></Item>, store))
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Sent only isDisabled=false', () => {
		const tree = renderer.create(wrapProvider(<Item></Item>, store)).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Sent nothing', () => {
		const tree = renderer.create(wrapProvider(<Item></Item>, store)).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Sent all', () => {
		const tree = renderer
			.create(
				wrapProvider(
					<Item
						name='name1'
						description='description'
						isDisabled='true'
					></Item>,
					store
				)
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Check event: handleInputChange(name)', async () => {
		render(
			wrapProvider(<Item name='dog' description='description'></Item>, store)
		);

		const label = screen.getByLabelText(/dog/i);
		fireEvent.click(label);

		await waitFor(() => {
			expect(store.getActions()).toEqual([
				{
					type: 'TEST_TYPE',
					args: ['dog'],
				},
			]);
		});
	});
});
