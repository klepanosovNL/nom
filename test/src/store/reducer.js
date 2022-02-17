import {
	SET_LIST,
	CHECK_CURRENT_PRESETS,
	SET_CATEGORY,
	SET_FILTER,
	SET_CATEGORY_STATUS,
	SET_STATUS_FOR_ALL_ITEMS,
	TOGGLE_DISABLED_FIELD,
	TOGGLE_DISABLED_FIELD_BY_NAME,
} from './actionTypes';

import {
	formatList,
	toggleDisabledList,
	toggleDisabledItemByName,
} from '../utils/utils';
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

		case TOGGLE_DISABLED_FIELD: {
			return {
				...state,
				list: toggleDisabledList(state.list, action.value),
			};
		}

		case TOGGLE_DISABLED_FIELD_BY_NAME: {
			return {
				...state,
				list: toggleDisabledItemByName(state.list, action.names),
			};
		}

		default:
			return state;
	}
};
