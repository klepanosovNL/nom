import {
	setList,
	setCurrentPreset,
	setCategory,
	setFilterByName,
	setStatusForAllItems,
	toggleDisabledItems,
	toggleDisabledItemsByName,
} from '../actionCreators';
import { mockStore } from '../../utils/mockedStore';
import {
	SET_LIST,
	SET_STATUS_FOR_ALL_ITEMS,
	CHECK_CURRENT_PRESETS,
	SET_CATEGORY,
	SET_FILTER_BY_NAME,
	TOGGLE_DISABLED_ITEMS,
	TOGGLE_DISABLED_ITEMS_BY_NAME,
	TOGGLE_CHECKBOX,
	TOGGLE_CHECKBOX_IN_CUSTOM,
} from '../actionTypes';

jest.mock('../../api/api', () => ({ items: [] }));

describe('Action creator testing', () => {
	let initialState;
	let store;

	beforeEach(() => {
		initialState = {
			list: [],
			currentPreset: 'none',
			filterByCategories: '',
			filterByNameInput: '',
			blockedButton: '',
			customs: [],
		};

		store = mockStore(initialState);
	});

	it('test setList()', () => {
		store.dispatch(setList());
		// await waitFor(() => {
		expect(store.getActions()).toEqual([
			{
				type: SET_LIST,
				payload: {
					list: [],
				},
			},
		]);
		// });
	});

	it('test setCurrentPreset(strong)', () => {
		store.dispatch(setCurrentPreset('strong'));
		// await waitFor(() => {
		expect(store.getActions()).toEqual([
			{
				type: CHECK_CURRENT_PRESETS,
				payload: {
					currentPreset: 'strong',
					list: [],
				},
			},
			{
				payload: {
					blockedButton: '',
				},
				type: SET_STATUS_FOR_ALL_ITEMS,
			},
			{
				payload: {
					category: '',
				},
				type: SET_CATEGORY,
			},
		]);
		// });
	});

	it('test setCategory("")', () => {
		store.dispatch(setCategory(''));
		expect(store.getActions()).toEqual([
			{
				type: SET_CATEGORY,
				payload: {
					category: '',
				},
			},
		]);
	});

	it('test setFilterByName', () => {
		store.dispatch(setFilterByName('hello'));

		expect(store.getActions()).toEqual([
			{
				type: SET_FILTER_BY_NAME,
				payload: {
					filterByNameInput: 'hello',
				},
			},
		]);
	});

	it('test setStatusForAllItems', () => {
		store.dispatch(setStatusForAllItems('allow'));

		expect(store.getActions()).toEqual([
			{
				type: SET_STATUS_FOR_ALL_ITEMS,
				payload: {
					blockedButton: 'allow',
				},
			},
		]);
	});

	it('test toggleDisabledItems', () => {
		store.dispatch(toggleDisabledItems(true));

		expect(store.getActions()).toEqual([
			{
				type: TOGGLE_DISABLED_ITEMS,
				payload: {
					list: [],
				},
			},
		]);
	});

	it('test toggleDisabledItemsByName', () => {
		store.dispatch(toggleDisabledItemsByName('dog'));

		expect(store.getActions()).toEqual([
			{
				type: TOGGLE_DISABLED_ITEMS_BY_NAME,
				payload: {
					list: [],
				},
			},
		]);
	});

	it('test checkBoxToggle, currentPreset: none', () => {
		store.dispatch(setCurrentPreset('custom'));

		store.dispatch({
			type: TOGGLE_CHECKBOX,
			payload: {
				list: [],
			},
		});

		store.dispatch(setStatusForAllItems(''));

		expect(store.getActions()).toEqual([
			{
				type: CHECK_CURRENT_PRESETS,
				payload: {
					currentPreset: 'custom',
					list: [],
				},
			},
			{
				type: SET_STATUS_FOR_ALL_ITEMS,
				payload: {
					blockedButton: '',
				},
			},
			{
				type: SET_CATEGORY,
				payload: {
					category: '',
				},
			},
			{
				type: TOGGLE_CHECKBOX,
				payload: {
					list: [],
				},
			},
			{
				type: SET_STATUS_FOR_ALL_ITEMS,
				payload: {
					blockedButton: '',
				},
			},
		]);
	});

	it('test checkBoxToggle, currentPreset: custom', () => {
		const initialState = {
			list: [],
			currentPreset: 'custom',
			filterByCategories: '',
			filterByNameInput: '',
			blockedButton: '',
			customs: [],
		};

		store = mockStore(initialState);

		store.dispatch({
			type: TOGGLE_CHECKBOX_IN_CUSTOM,
			payload: {
				customs: [],
			},
		});

		store.dispatch({
			type: TOGGLE_CHECKBOX,
			payload: {
				list: [],
			},
		});

		store.dispatch(setStatusForAllItems(''));

		expect(store.getActions()).toEqual([
			{
				type: TOGGLE_CHECKBOX_IN_CUSTOM,
				payload: {
					customs: [],
				},
			},
			{
				type: TOGGLE_CHECKBOX,
				payload: {
					list: [],
				},
			},
			{
				type: SET_STATUS_FOR_ALL_ITEMS,
				payload: {
					blockedButton: '',
				},
			},
		]);
	});
});
