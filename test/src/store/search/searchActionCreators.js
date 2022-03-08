import { SET_FILTER_BY_NAME } from '../actionTypes';

export const setFilterByName = (filterByNameInput) => {
	return {
		type: SET_FILTER_BY_NAME,
		payload: {
			filterByNameInput,
		},
	};
};
