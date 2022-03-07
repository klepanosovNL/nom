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
import { reducer } from '../listReducer';
import { mockStore } from '../../utils/mockedStore';

describe('Reducer"s test', () => {
	let initialState;
	let store;

	const expected = {
		list: [],
		currentPreset: 'none',
		filterByCategories: '',
		filterByNameInput: '',
		blockedButton: '',
		customs: [],
	};

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

	it('SET_LIST action', () => {
		const newReducer = reducer(initialState, {
			type: SET_LIST,
			payload: {
				list: [],
			},
		});

		expect(newReducer).toEqual(expected);
	});

	it('TOGGLE_CHECKBOX action', () => {
		const newReducer = reducer(initialState, {
			type: TOGGLE_CHECKBOX,
			payload: {
				list: [],
			},
		});

		expect(newReducer).toEqual(expected);
	});

	it('SET_CATEGORY_STATUS action', () => {
		const newReducer = reducer(initialState, {
			type: SET_CATEGORY_STATUS,
			payload: {
				list: [],
			},
		});

		expect(newReducer).toEqual(expected);
	});

	it('TOGGLE_DISABLED_ITEMS action', () => {
		const newReducer = reducer(initialState, {
			type: TOGGLE_DISABLED_ITEMS,
			payload: {
				list: [],
			},
		});

		expect(newReducer).toEqual(expected);
	});

	it('TOGGLE_DISABLED_ITEMS_BY_NAME action', () => {
		const newReducer = reducer(initialState, {
			type: TOGGLE_DISABLED_ITEMS_BY_NAME,
			payload: {
				list: [],
			},
		});

		expect(newReducer).toEqual(expected);
	});

	it('TOGGLE_CHECKBOX action', () => {
		const newReducer = reducer(initialState, {
			type: TOGGLE_CHECKBOX,
			payload: {
				list: [],
			},
		});

		expect(newReducer).toEqual(expected);
	});

	it('CHECK_CURRENT_PRESETS action', () => {
		const newReducer = reducer(initialState, {
			type: CHECK_CURRENT_PRESETS,
			payload: {
				currentPreset: 'none',
				list: [],
			},
		});

		expect(newReducer).toEqual(expected);
	});

	it('SET_CATEGORY action', () => {
		const newReducer = reducer(initialState, {
			type: SET_CATEGORY,
			payload: {
				currentPreset: 'none',
				filterByCategories: '',
			},
		});

		expect(newReducer).toEqual(expected);
	});

	it('SET_FILTER_BY_NAME action', () => {
		const newReducer = reducer(initialState, {
			type: SET_FILTER_BY_NAME,
			payload: {
				filterByNameInput: '',
			},
		});

		expect(newReducer).toEqual(expected);
	});

	it('SET_STATUS_FOR_ALL_ITEMS action', () => {
		const newReducer = reducer(initialState, {
			type: SET_STATUS_FOR_ALL_ITEMS,
			payload: {
				blockedButton: '',
			},
		});

		expect(newReducer).toEqual(expected);
	});

	it('TOGGLE_CHECKBOX_IN_CUSTOM action', () => {
		const newReducer = reducer(initialState, {
			type: TOGGLE_CHECKBOX_IN_CUSTOM,
			payload: {
				customs: [],
			},
		});

		expect(newReducer).toEqual(expected);
	});

	it('SET_CUSTOM action', () => {
		const newReducer = reducer(initialState, {
			type: SET_CUSTOM,
			payload: {
				customs: [],
			},
		});

		expect(newReducer).toEqual(expected);
	});

	it('TEST action', () => {
		const newReducer = reducer(initialState, {
			type: 'TEST',
		});

		expect(newReducer).toEqual(expected);
	});
});
