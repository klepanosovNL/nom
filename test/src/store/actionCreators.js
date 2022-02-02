import {
	GET_LIST,
	CHECK_CURRENT_PRESETS,
	SET_CATEGORY,
	SET_FILTER,
	SET_CATEGORY_STATUS,
} from './actionTypes';

export const getList = (list) => {
	return {
		type: GET_LIST,
		list,
	};
};

export const checkCurrentPreset = (currentPreset) => {
	return {
		type: CHECK_CURRENT_PRESETS,
		currentPreset,
	};
};

export const setCategory = (category) => {
	return {
		type: SET_CATEGORY,
		category,
	};
};

export const setFilter = (filter) => {
	return {
		type: SET_FILTER,
		filter,
	};
};

export const setCategoryStatus = (list) => {
	return {
		type: SET_CATEGORY_STATUS,
		list,
	};
};
