import { SET_CATEGORY } from '../action.types';

export const setCategory = (category) => {
	return {
		type: SET_CATEGORY,
		payload: {
			category,
		},
	};
};
