import React from 'react';
import renderer from 'react-test-renderer';
import { Navigator } from '../Navigator';
import { mockStore, wrapProvider } from '../../../utils/mockedStore';
import { render, screen, fireEvent } from '@testing-library/react';

jest.mock('../../../store/actionCreators', () => ({
	setCurrentPreset: (...args) => ({ type: 'TEST_TYPE', args }),
	toggleDisabledItems: (...args) => ({ type: 'TEST_TYPE_TOGGLE', args }),
	toggleDisabledItemsByName: (args) => ({
		type: 'TEST_TYPE_TOGGLE_DISABLED',
		args,
	}),
}));

describe('Navigator"s tests', () => {
	let store;

	beforeEach(() => {
		const initialState = {
			list: [],
			currentPreset: 'none',
			filterByCategories: '',
			filterByNameInput: '',
			blockedButton: '',
			customs: [],
		};

		store = mockStore(initialState);
	});

	it('Check event: clickHandler(low)', () => {
		render(wrapProvider(<Navigator></Navigator>, store));

		const label = screen.getByText(/low/i);
		fireEvent.click(label);

		expect(store.getActions()).toEqual([
			{
				type: 'TEST_TYPE',
				args: ['low'],
			},
			{
				type: 'TEST_TYPE_TOGGLE',
				args: [false],
			},
			{
				type: 'TEST_TYPE_TOGGLE_DISABLED',
				args: ['Literature', 'Software', 'Dogs', 'Cartoons'],
			},
		]);
	});

	it('Check event: clickHandler(strong)', () => {
		render(wrapProvider(<Navigator></Navigator>, store));

		const label = screen.getByText(/strong/i);
		fireEvent.click(label);

		expect(store.getActions()).toEqual([
			{
				type: 'TEST_TYPE',
				args: ['strong'],
			},
			{
				type: 'TEST_TYPE_TOGGLE',
				args: [true],
			},
		]);
	});

	it('Check event: clickHandler(none)', () => {
		render(wrapProvider(<Navigator></Navigator>, store));

		const label = screen.getByText(/none/i);
		fireEvent.click(label);

		expect(store.getActions()).toEqual([
			{
				type: 'TEST_TYPE',
				args: ['none'],
			},
			{
				type: 'TEST_TYPE_TOGGLE',
				args: [false],
			},
		]);
	});

	it('Navigator"s snapshot', () => {
		const tree = renderer
			.create(wrapProvider(<Navigator></Navigator>, store))
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
