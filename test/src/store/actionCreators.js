import {
	SET_LIST,
	CHECK_CURRENT_PRESETS,
	SET_CATEGORY,
	SET_FILTER_BY_NAME,
	SET_STATUS_FOR_ALL_ITEMS,
	CATEGORY_CHANGE,
	CATEGORIES_CHANGE,
	TOGGLE_ALLOW_ALL,
	TOGGLE_BLOCK_ALL,
	CHANGE_PROTECTION,
} from './actionTypes';
import {
	formatList,
} from '../utils/utils';

import { PROTECTIONS, PROTECTION_LEVEL } from "./reducer";

import { items } from '../api/api';
import _ from 'lodash';

export const setList = () => {
	return {
		type: SET_LIST,
		payload: {
			list: formatList(items),
		},
	};
};

export const setCurrentPreset = (currentPreset) => (dispatch, getSate) => {
	dispatch({
		type: CHECK_CURRENT_PRESETS,
		payload: {
			currentPreset,
		},
	});
};

export const setCategory = (category) => ({
	type: SET_CATEGORY,
	payload: {
		category,
	},
});

export const setFilterByName = (filterByNameInput) => ({
	type: SET_FILTER_BY_NAME,
		payload: {
			filterByNameInput,
		},
});

export const setStatusForAllItems = (buttonName) => ({
	type: SET_STATUS_FOR_ALL_ITEMS,
		payload: {
			blockedButton: buttonName,
	},
});

export const toggleAllToBlock = () => (dispatch, getState) => {
	const store = getState();
	const { list } = store;

	const blockedCategories = _.map(list, ({name}) => name);
	
	dispatch({
		type: TOGGLE_BLOCK_ALL,
		payload: { blockedCategories,  currentPreset: PROTECTIONS.strong },
	})
};

export const toggleAllToAllow = () => (dispatch, getState) => {
	dispatch({
		type: TOGGLE_ALLOW_ALL,
		payload: { blockedCategories: [], currentPreset: PROTECTIONS.none },
	})
};

export const torrleListCategoriesToBlock = (list, protectionLevel) => (dispatch, getState) => {
	dispatch({
		type: CATEGORIES_CHANGE,
		payload: {blockedCategories: list, protectionLevel}
	})
};

export const changeProtection = protection => (dispatch, getState) => {
	const { custom } = getState();

	switch (protection) {
		case PROTECTIONS.none:
		   return dispatch(toggleAllToAllow());
	
		case PROTECTIONS.strong:
			return dispatch(toggleAllToBlock());

		case PROTECTIONS.low:
			return dispatch(torrleListCategoriesToBlock(PROTECTION_LEVEL[PROTECTIONS.low], PROTECTIONS.low))

		case PROTECTIONS.custom:
			dispatch(torrleListCategoriesToBlock(custom, PROTECTIONS.custom));
			dispatch({
				type: CHANGE_PROTECTION,
				payload: {currentPreset: PROTECTIONS.custom}
			})

		default:
			break;
	}
};

export const checkBoxToggle = (name, isBlocked) => (dispatch, getState) => {
	const { blockedCategories, customs } = getState();

	const low = PROTECTION_LEVEL[PROTECTIONS.low];
	const protectionLevel = _.isEqual(_.sortBy(low), _.sortBy(customs)) ? PROTECTIONS.low : PROTECTIONS.custom

	dispatch({
		type: CATEGORY_CHANGE,
		payload: {
			blockedCategories: isBlocked 
				? [ ...blockedCategories, name] 
				: _.without(blockedCategories, name),
			currentPreset: protectionLevel,
		},
	});
};
