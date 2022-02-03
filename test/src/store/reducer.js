import {
	GET_LIST,
	CHECK_CURRENT_PRESETS,
	SET_CATEGORY,
	SET_FILTER,
	SET_CATEGORY_STATUS,
	SET_STATUS_FOR_ALL_ITEMS,
} from './actionTypes';

const initialState = {
	list: [],
	currentPreset: 'none',
	filterCategories: '',
	filter: '',
	blockedButton: '',
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_LIST:
		case SET_CATEGORY_STATUS:
			return {
				...state,
				list: [...action.list],
			};

		case CHECK_CURRENT_PRESETS:
			return {
				...state,
				currentPreset: action.currentPreset,
			};

		case SET_CATEGORY: {
			return {
				...state,
				filterCategories: action.category || '',
			};
		}

		case SET_FILTER: {
			return {
				...state,
				filter: action.filter || '',
			};
		}

		case SET_STATUS_FOR_ALL_ITEMS: {
			return {
				...state,
				blockedButton: action.blockedButton,
			};
		}

		default:
			return state;
	}
};
