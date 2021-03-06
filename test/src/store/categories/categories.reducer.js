import { SET_CATEGORY } from '../action.types';

const initialState = {
	filterByCategories: '',
};

export const filterByCategoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CATEGORY: {
			return {
				...state,
				filterByCategories: action.payload.category || '',
			};
		}

		default:
			return state;
	}
};
