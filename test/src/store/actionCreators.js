import {
	SET_LIST,
	CHECK_CURRENT_PRESETS,
	SET_CATEGORY,
	SET_FILTER_BY_NAME,
	SET_STATUS_FOR_ALL_ITEMS,
	TOGGLE_DISABLED_ITEMS,
	TOGGLE_DISABLED_ITEMS_BY_NAME,
	TOGGLE_CHECKBOX,
	SET_CUSTOM,
	TOGGLE_CHECKBOX_IN_CUSTOM,
} from './actionTypes';
import {
	formatList,
	toggleDisabledList,
	toggleDisabledItemByName,
	toggleCheckboxStatus,
} from '../utils/utils';

import { items } from '../api/api';

export const setList = () => {
	return {
		type: SET_LIST,
		list: formatList(items),
	};
};

export const setCurrentPreset = (currentPreset) => (dispatch, getSate) => {
	const list = getSate().list;

	dispatch({
		type: CHECK_CURRENT_PRESETS,
		payload: {
			currentPreset,
			list,
		},
	});

	dispatch(setStatusForAllItems(''));
	dispatch(setCategory(''));
};

export const setCategory = (category) => {
	return {
		type: SET_CATEGORY,
		category,
	};
};

export const setFilterByName = (filterByNameInput) => {
	return {
		type: SET_FILTER_BY_NAME,
		filterByNameInput,
	};
};

export const setStatusForAllItems = (buttonName) => {
	return {
		type: SET_STATUS_FOR_ALL_ITEMS,
		blockedButton: buttonName,
	};
};

export const toggleDisabledItems = (value) => (dispatch, getState) => {
	const list = getState().list;

	dispatch({
		type: TOGGLE_DISABLED_ITEMS,
		list: toggleDisabledList(list, value),
	});
};

export const toggleDisabledItemsByName = (names) => (dispatch, getState) => {
	const list = getState().list;

	dispatch({
		type: TOGGLE_DISABLED_ITEMS_BY_NAME,
		list: toggleDisabledItemByName(list, names),
	});
};

export const checkBoxToggle = (name) => (dispatch, getState) => {
	const store = getState();
	const { list, customs, currentPreset } = store;

	if (currentPreset === 'custom') {
		return dispatch({
			type: TOGGLE_CHECKBOX_IN_CUSTOM,
			customs: toggleCheckboxStatus(customs, name),
		});
	} else {
		dispatch(setCurrentPreset('custom'));
	}

	dispatch({
		type: TOGGLE_CHECKBOX,
		list: toggleCheckboxStatus(list, name),
	});

	const element = list.find((item) => item.name === name);
	element.isDisabled = false;

	if (!element.isCustom) {
		dispatch({
			type: SET_CUSTOM,
			customs: [...customs, element],
		});
	}

	dispatch(setStatusForAllItems(''));
};
