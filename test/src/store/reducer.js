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
} from './actionTypes';

const initialState = {
	list: [],
	currentPreset: 'none',
	filterByCategories: '',
	filterByNameInput: '',
	blockedButton: '',
	customs: [],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LIST:
		case SET_CATEGORY_STATUS:
		case TOGGLE_DISABLED_ITEMS:
		case TOGGLE_DISABLED_ITEMS_BY_NAME:
		case TOGGLE_CHECKBOX:
			return {
				...state,
				list: action.list,
			};

		case CHECK_CURRENT_PRESETS:
			return {
				...state,
				currentPreset: action.payload.currentPreset,
				list: action.payload.list,
			};

		case SET_CATEGORY: {
			return {
				...state,
				filterByCategories: action.category || '',
			};
		}

		case SET_FILTER_BY_NAME: {
			return {
				...state,
				filterByNameInput: action.filterByNameInput || '',
			};
		}

		case SET_STATUS_FOR_ALL_ITEMS: {
			return {
				...state,
				blockedButton: action.blockedButton,
			};
		}

		case TOGGLE_CHECKBOX_IN_CUSTOM: {
			return {
				...state,
				customs: action.customs,
			};
		}

		case SET_CUSTOM: {
			return {
				...state,
				customs: action.customs,
			};
		}

		default:
			return state;
	}
};
