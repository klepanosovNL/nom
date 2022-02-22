import {
	SET_LIST,
	CHECK_CURRENT_PRESETS,
	SET_CATEGORY,
	SET_FILTER_BY_NAME,
	SET_CATEGORY_STATUS,
	SET_STATUS_FOR_ALL_ITEMS,
	TOGGLE_DISABLED_ITEMS,
	TOGGLE_DISABLED_ITEMS_BY_NAME,
	CATEGORY_CHANGE,
	CATEGORIES_CHANGE,
	TOGGLE_ALLOW_ALL,
	TOGGLE_BLOCK_ALL,
	SET_CUSTOM,
	TOGGLE_CHECKBOX_IN_CUSTOM,
	CHANGE_PROTECTION,
} from './actionTypes';
import _ from "lodash";

export const PROTECTIONS = {
	none: 'None',
	low: 'Low',
	strong: 'Strong',
	custom: 'Custom',
};

export const PROTECTION_LEVEL = {
	[PROTECTIONS.none]: 'none',
	[PROTECTIONS.low]: ['Literature', 'Software', 'Dogs', 'Cartoons'],
	[PROTECTIONS.strong]: 'all',
	[PROTECTIONS.custom]: 'custom',
};

export const PROTECTIONS_LIST = [PROTECTIONS.none, PROTECTIONS.low, PROTECTIONS.strong, PROTECTIONS.custom];

const initialState = {
	list: [],
	currentPreset: PROTECTIONS.none,
	filterByCategories: '',
	filterByNameInput: '',
	blockedButton: '',
	customs: [],
	blockedCategories: [],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LIST:
		case SET_CATEGORY_STATUS:
		case TOGGLE_DISABLED_ITEMS:
		case TOGGLE_DISABLED_ITEMS_BY_NAME: {
			const { list } = action.payload;
			return {
				...state,
				list,
			};
		}

		case CHANGE_PROTECTION: {
			const { currentPreset } = action.payload

			return {
				...state,
				currentPreset,
			}
		}

		case CATEGORY_CHANGE: {
			const { blockedCategories, currentPreset } = action.payload;

			return {
				...state,
				blockedCategories,
				customs: blockedCategories,
				currentPreset,
			};
		}

		case CATEGORIES_CHANGE: 
		case TOGGLE_ALLOW_ALL:
		case TOGGLE_BLOCK_ALL: {
			const { blockedCategories, currentPreset } = action.payload;

			return {
				...state,
				blockedCategories,
				currentPreset
			};
		}

		case CHECK_CURRENT_PRESETS:
			return {
				...state,
				currentPreset: action.payload.currentPreset,
				list: action.payload.list,
			};

		case SET_CATEGORY: {
			return {
				...state,
				filterByCategories: action.payload.category || '',
			};
		}

		case SET_FILTER_BY_NAME: {
			return {
				...state,
				filterByNameInput: action.payload.filterByNameInput || '',
			};
		}

		case SET_STATUS_FOR_ALL_ITEMS: {
			return {
				...state,
				blockedButton: action.payload.blockedButton,
			};
		}

		case TOGGLE_CHECKBOX_IN_CUSTOM: {
			return {
				...state,
				customs: action.payload.customs,
			};
		}

		case SET_CUSTOM: {
			return {
				...state,
				customs: action.payload.customs,
			};
		}

		default:
			return state;
	}
};
