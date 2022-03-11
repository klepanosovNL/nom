import { SET_FILTER_BY_NAME } from '../action.types';

export const setFilterByName = (filterByNameInput) => {
	return {
		type: SET_FILTER_BY_NAME,
		payload: {
			filterByNameInput,
		},
	};
};
