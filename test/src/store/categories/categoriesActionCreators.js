import { SET_CATEGORY } from '../actionTypes';

export const setCategory = (category) => {
	return {
		type: SET_CATEGORY,
		payload: {
			category,
		},
	};
};
