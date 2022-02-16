import {
	SET_LIST,
	CHECK_CURRENT_PRESETS,
	SET_CATEGORY,
	SET_FILTER,
	SET_CATEGORY_STATUS,
	SET_STATUS_FOR_ALL_ITEMS,
	SET_NEW_FIELD,
} from './actionTypes';

export const setList = (list) => {
	return {
		type: SET_LIST,
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

export const setStatusForAllItems = (buttonName) => {
	return {
		type: SET_STATUS_FOR_ALL_ITEMS,
		blockedButton: buttonName,
	};
};

export const setNewField = (fieldName, value) => {
	return {
		type: SET_NEW_FIELD,
		fieldName,
		value,
	};
};

// export const setNewField = (fieldName, value) => (getState) => {
// 	const list = getState().list;

// 	list.map((element) => (element[fieldName] = value));

// 	// dispatch(getList(list));
// };
