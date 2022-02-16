import {
	SET_LIST,
	CHECK_CURRENT_PRESETS,
	SET_CATEGORY,
	SET_FILTER,
	SET_CATEGORY_STATUS,
	SET_STATUS_FOR_ALL_ITEMS,
	SET_NEW_FIELD,
} from './actionTypes';

import { formatList } from '../utils/utils';
import { items } from '../api/api';

const initialState = {
	list: [],
	currentPreset: 'none',
	filterCategories: '',
	filter: '',
	blockedButton: '',
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LIST:
			return {
				...state,
				list: formatList(items),
			};
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

		case SET_NEW_FIELD: {
			const list = state.list.map((element) => ({
				...element,
				[action.fieldName]: action.value,
			}));

			return {
				...state,
				list,
			};
		}

		default:
			return state;
	}
};
