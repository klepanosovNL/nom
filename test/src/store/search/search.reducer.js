import { SET_FILTER_BY_NAME } from '../action.types';

const initialState = {
	filterByNameInput: '',
};

export const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FILTER_BY_NAME:
			return {
				...state,
				filterByNameInput: action.payload.filterByNameInput || '',
			};

		default:
			return state;
	}
};
