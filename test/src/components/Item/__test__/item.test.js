import React from 'react';
import renderer from 'react-test-renderer';
import * as reactRedux from 'react-redux';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Item } from '../Item';
import { mockStore, wrapProvider } from '../../../utils/mockedStore';
// import { checkBoxToggle } from '../../../store/actionCreators';
import { toggleCheckboxStatus } from '../../../utils/utils';

jest.mock('../../../store/actionCreators', () => ({
	checkBoxToggle: (...args) => ({ type: 'TEST_TYPE', args }),
}));

describe('Item"s tests', () => {
	beforeEach(() => {
		useSelectorMock.mockClear();
		useDispatchMock.mockClear();
	});

	const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
	const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

	it('Sent only name', () => {
		const tree = renderer.create(<Item name='name1'></Item>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Sent only description', () => {
		const tree = renderer
			.create(<Item description='description'></Item>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Sent only isDisabled=true', () => {
		const tree = renderer.create(<Item isDisabled='true'></Item>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Sent only isDisabled=false', () => {
		const tree = renderer.create(<Item></Item>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Sent nothing', () => {
		const tree = renderer.create(<Item></Item>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Sent all', () => {
		const tree = renderer
			.create(
				<Item name='name1' description='description' isDisabled='true'></Item>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Check event: handleInputChange(name)', async () => {
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

		render(
			wrapProvider(<Item name='dog' description='description'></Item>, store)
		);

		const label = screen.getByLabelText(/dog/i);
		fireEvent.click(label);

		await waitFor(() => {
			expect(store.getActions()).toEqual([
				{
					type: 'TEST_TYPE',
					args: [],
				},
			]);
		});
	});
});
