import {
	SET_LIST,
	CHECK_CURRENT_PRESETS,
	SET_CATEGORY,
	SET_FILTER_BY_NAME,
	SET_CATEGORY_STATUS,
	SET_STATUS_FOR_ALL_ITEMS,
	TOGGLE_DISABLED_ITEMS,
	TOGGLE_DISABLED_ITEMS_BY_NAME,
	TOGGLE_CHECKBOX,
	SET_CUSTOM,
	TOGGLE_CHECKBOX_IN_CUSTOM,
} from '../actionTypes';
import { reducer } from '../reducer';

describe('Reducer"s test', () => {
	const initialState = {
		list: [],
		currentPreset: 'none',
		filterByCategories: '',
		filterByNameInput: '',
		blockedButton: '',
		customs: [],
	};

	it('default', () => {
		const action = {
			type: 'test',
		};

		expect(reducer(initialState, action)).toEqual(initialState);
	});

	it('SET_LIST action', () => {
		const expected = {
			list: [
				{
					name: 'test name',
					description: 'test description',
				},
				{
					name: 'test name1',
					description: 'test description1',
				},
			],
			currentPreset: 'none',
			filterByCategories: '',
			filterByNameInput: '',
			blockedButton: '',
			customs: [],
		};

		const action = {
			type: SET_LIST,
			payload: expected,
		};

		expect(reducer(initialState, action)).toEqual(expected);
	});

	it('TOGGLE_CHECKBOX action', () => {
		const expected = {
			list: [
				{
					name: 'test name',
					description: 'test description',
				},
				{
					name: 'test name1',
					description: 'test description1',
				},
			],
			currentPreset: 'none',
			filterByCategories: '',
			filterByNameInput: '',
			blockedButton: '',
			customs: [],
		};

		const action = {
			type: TOGGLE_CHECKBOX,
			payload: expected,
		};

		expect(reducer(initialState, action)).toEqual(expected);
	});

	it('SET_CATEGORY_STATUS action', () => {
		const expected = {
			list: [
				{
					name: 'test name',
					description: 'test description',
				},
				{
					name: 'test name1',
					description: 'test description1',
				},
			],
			currentPreset: 'none',
			filterByCategories: '',
			filterByNameInput: '',
			blockedButton: '',
			customs: [],
		};

		const action = {
			type: SET_CATEGORY_STATUS,
			payload: expected,
		};

		expect(reducer(initialState, action)).toEqual(expected);
	});

	it('TOGGLE_DISABLED_ITEMS action', () => {
		const expected = {
			list: [
				{
					name: 'test name',
					description: 'test description',
				},
				{
					name: 'test name1',
					description: 'test description1',
				},
			],
			currentPreset: 'none',
			filterByCategories: '',
			filterByNameInput: '',
			blockedButton: '',
			customs: [],
		};

		const action = {
			type: TOGGLE_DISABLED_ITEMS,
			payload: expected,
		};

		expect(reducer(initialState, action)).toEqual(expected);
	});

	it('TOGGLE_DISABLED_ITEMS_BY_NAME action', () => {
		const expected = {
			list: [
				{
					name: 'test name',
					description: 'test description',
				},
				{
					name: 'test name1',
					description: 'test description1',
				},
			],
			currentPreset: 'none',
			filterByCategories: '',
			filterByNameInput: '',
			blockedButton: '',
			customs: [],
		};

		const action = {
			type: TOGGLE_DISABLED_ITEMS_BY_NAME,
			payload: expected,
		};

		expect(reducer(initialState, action)).toEqual(expected);
	});

	it('CHECK_CURRENT_PRESETS action', () => {
		const expected = {
			list: [],
			currentPreset: 'low',
			filterByCategories: '',
			filterByNameInput: '',
			blockedButton: '',
			customs: [],
		};

		const action = {
			type: CHECK_CURRENT_PRESETS,
			payload: expected,
		};

		expect(reducer(initialState, action)).toEqual(expected);
	});

	// it('SET_CATEGORY action', () => {
	// 	const action = setCurrentPreset('test');
	// 	const expected = {
	// 		list: [],
	// 		currentPreset: 'test',
	// 		filterByCategories: '',
	// 		filterByNameInput: '',
	// 		blockedButton: '',
	// 		customs: [],
	// 	};

	// 	// const action = {
	// 	// 	type: SET_CATEGORY,
	// 	// 	payload: expected,
	// 	// };
	// 	const newReducer = reducer(initialState, action);
	// 	expect(newReducer).toEqual(expected);
	// 	//TODO
	// 	//call action
	// });

	it('SET_FILTER_BY_NAME action', () => {
		const expected = {
			list: [],
			currentPreset: 'none',
			filterByCategories: '',
			filterByNameInput: '',
			blockedButton: '',
			customs: [],
		};

		const action = {
			type: SET_FILTER_BY_NAME,
			payload: expected,
		};

		expect(reducer(initialState, action)).toEqual(expected);
	});

	it('SET_STATUS_FOR_ALL_ITEMS action', () => {
		const expected = {
			list: [],
			currentPreset: 'none',
			filterByCategories: '',
			filterByNameInput: '',
			blockedButton: 'Block all',
			customs: [],
		};

		const action = {
			type: SET_STATUS_FOR_ALL_ITEMS,
			payload: expected,
		};

		expect(reducer(initialState, action)).toEqual(expected);
	});

	it('TOGGLE_CHECKBOX_IN_CUSTOM action', () => {
		const expected = {
			list: [],
			currentPreset: 'none',
			filterByCategories: '',
			filterByNameInput: '',
			blockedButton: '',
			customs: [
				{
					name: 'test name',
					description: 'test description',
				},
				{
					name: 'test name1',
					description: 'test description1',
				},
			],
		};

		const action = {
			type: TOGGLE_CHECKBOX_IN_CUSTOM,
			payload: expected,
		};

		expect(reducer(initialState, action)).toEqual(expected);
	});

	it('SET_CUSTOM action', () => {
		const expected = {
			list: [],
			currentPreset: 'none',
			filterByCategories: '',
			filterByNameInput: '',
			blockedButton: '',
			customs: [
				{
					name: 'test name',
					description: 'test description',
				},
				{
					name: 'test name1',
					description: 'test description1',
				},
			],
		};

		const action = {
			type: SET_CUSTOM,
			payload: expected,
		};

		expect(reducer(initialState, action)).toEqual(expected);
	});
});
